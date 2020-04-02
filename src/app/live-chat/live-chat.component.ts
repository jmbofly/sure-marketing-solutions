import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LiveChatService } from './services/live-chat.service';
import { MOCKCHATS } from './mock.data';
import { ChatMessage, MainThread } from './live-chat';
import { Observable } from 'rxjs';
import { ModalFormComponent } from './modal-form/modal-form.component';

@Component({
  selector: 'sms-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {
  userMessage: any = {
    value: ''
  };
  showChat = false;
  isTyping = false;
  chatCollapsed = false;
  chatThread: MainThread = { messages: MOCKCHATS };

  constructor(private chatService: LiveChatService) { }

  ngOnInit(): void {
  }

  // openModal(template: TemplateRef<ModalFormComponent>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  toggleChat() {
    this.showChat = !this.showChat;
  }

  openChat() {
    this.chatService.initChat();
    this.chatThread = this.chatService.mainThread;
    this.showChat = true;
  }

  sendMessage(val: string, body?: any) {
    const msg: ChatMessage = {
      type: 'user',
      timestamp: new Date(),
      text: `${val}`,
    }
    this.chatService.addMessage(msg);
    this.userMessage.value = '';
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, 4000);

  }

  closeChat() {
    this.showChat = false;
    this.chatCollapsed = false;
  }

  collapseChat() {
    this.chatCollapsed = !this.chatCollapsed;
  }

}
