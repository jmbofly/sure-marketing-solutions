import { Injectable } from '@angular/core';
import { DataService } from '../core/data.service';
import { CookieService } from 'ngx-cookie-service';
import { ThreadHistory, User, Support, ChatMessage } from './live-chat';
import { BsModalService, ModalDirective } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
export class ChatThread {
  constructor(public user: User, public support: Support, public history: ThreadHistory) { }
}
@Injectable({
  providedIn: 'root'
})
export class LiveChatService {
  user: User;
  support: Support;
  history: ThreadHistory;

  constructor(private dataService: DataService, private cookieService: CookieService, private modalService: BsModalService) { }

  addMessage(msg: ChatMessage) {
    const userId = this.cookieService.get('user_id');
    this.dataService.addToCollection<ChatMessage>(`users/${userId}/chat`, msg)
  }

  getMessages(userId: string) {
    return this.dataService.getCollection(`users/${userId}/chat`).valueChanges()
  }

  initChat() {
    const userExists = this.cookieService.check('user_id');
    if (userExists) {
      const userId = this.cookieService.get('user_id');
      setTimeout(() => {
        const users = this.dataService.getCollection<User>('users')
          .valueChanges();
        users.subscribe(users => {
          this.user = users.find(user => user.id = userId)[0];
        });
      }, 200)
      console.log('user found', this.user)
    } else {
      this.user = this.initUser();
      this.support = this.initSupport();
      this.history = this.initHistory();
    }
  }

  private initUser(): User {
    const user = {
      id: `${Math.floor(Math.random() * 100) + Date.now()}`,
      email: '',
      name: '',
      messages: {
        sent: [],
        recieved: []
      },
      log: []
    }
    this.cookieService.set('user_id', `${user.id}`)
    this.dataService.addDocument<User>(`users/${user.id}`, user);
    return user;
  }

  private initSupport(): Support {
    return {
      messages: {
        sent: [],
        recieved: []
      },
      log: []
    }
  }

  private initHistory(): ThreadHistory {
    return {
      initTime: new Date(),
      messages: [],
      log: []
    }
  }
}
