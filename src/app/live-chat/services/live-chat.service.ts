import { Injectable, TemplateRef } from '@angular/core';
import { DataService } from '../../core/data.service';
import { CookieService } from 'ngx-cookie-service';
import { MainThread, User, Support, ChatMessage } from '../live-chat';
import { BsModalService, ModalDirective, BsModalRef } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { SupportService } from './support.service';
export class ChatThread {
  constructor(public user: User, public support: Support, public history: MainThread) { }
}
@Injectable({
  providedIn: 'root'
})
export class LiveChatService {
  user: User;
  support: Support;
  mainThread: MainThread;
  modalRef: BsModalRef;

  constructor(
    private dataService: DataService,
    private cookieService: CookieService,
    private userService: UserService,
    private supportService: SupportService,
    private modalService: BsModalService
  ) { }

  addMessage(msg: ChatMessage) {
    this.mainThread.messages.push(msg);
    this.getSupportResponseMessage(msg);
  }
  getSupportResponseMessage(msg: any) {
    if (msg)
    console.log('init support response', msg);
  }

  initChat() {
    this.mainThread = {
      messages: [],
      initTime: new Date(),
      log: [{ text: 'main chat thread initialized', timestamp: new Date() }]
    };
    this.user = this.userService.initUser();
    this.supportService.initSupport().then(res => this.addMessage(res));
  }
}
