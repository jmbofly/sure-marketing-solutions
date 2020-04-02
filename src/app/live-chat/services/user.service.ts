import { Injectable } from '@angular/core';
import { DataService } from '../../core/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../live-chat';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  userId: string;

  constructor(private cookieService: CookieService, private dataService: DataService) { }

  getUser(id: string) {
    const u = this.dataService
      .getCollection<User>('users')
      .doc<User>(id).valueChanges();
    u.subscribe(user => this.user = user);
    return u;
  }

  async setUser(id: string) {
    const user = {
      id,
      email: '',
      name: '',
      messages: {
        sent: [],
        recieved: []
      },
      log: [{ text: 'User initialized', timestamp: new Date() }]
    };
    await this.dataService.addDocument<User>(`users/${id}`, user);
    return this.getUser(id);
  }

  initUser() {
    const userExists = this.cookieService.check('user_id');
    if (userExists) {
      const userId = this.cookieService.get('user_id');
      this.getUser(userId);
    } else {
      const userId = `${Math.floor(Math.random() * 100) + Date.now()}`;
      this.cookieService.set('user_id', `${userId}`);
      this.setUser(userId);
    }
    return this.user;
  }
}
