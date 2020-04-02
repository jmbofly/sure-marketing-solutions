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
    this.getSupportResponseMessage(msg.text)
  }
  getSupportResponseMessage(text: string) {
    console.log('init support response', text)
  }

  initChat() {
    const supportWelcome: ChatMessage = {
      timestamp: new Date(),
      type: 'support',
      body: `<b>Welcome to Live Chat!</b><br> I'm Adam, Sure Marketing Solutions support chat bot.<br> I can answer questions stored in our Frequently Asked Questions database.<br> How can I help you?`
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
