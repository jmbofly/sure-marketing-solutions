import { Injectable, TemplateRef } from '@angular/core';
import { DataService } from '../../core/data.service';
import { CookieService } from 'ngx-cookie-service';
import { MainThread, User, Support, ChatMessage } from '../live-chat';
import { BsModalService, ModalDirective, BsModalRef } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ModalFormComponent } from '../modal-form/modal-form.component';
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
    private modalService: BsModalService
  ) { }

  addMessage(msg: ChatMessage) {
    this.mainThread.messages.push(msg);
    return msg.type === 'user' ? Promise.resolve('WAITING') : Promise.resolve('COMPLETE');
  }

  initChat() {
    const supportWelcome: ChatMessage = {
      timestamp: new Date(),
      type: 'support',
      text: `Welcome to Live Chat! I'm Adam, a Sure Marketing Solutions support associate. How can I help you?`
    }
    this.mainThread = {
      messages: [],
      initTime: new Date(),
      log: [{ text: 'main chat thread initialized', timestamp: new Date() }]
    };
    this.user = this.userService.initUser();
    this.addMessage(supportWelcome);
  }

  // openModal() {
  //   this.modalRef = this.modalService.show(ModalFormComponent);
  // }
}
