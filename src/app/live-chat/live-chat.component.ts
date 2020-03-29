import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { LiveChatService } from './live-chat.service';
import { MOCKCHATS } from './mock.data';
import { ChatMessage, LiveChat } from './live-chat';

@Component({
  selector: 'sms-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modalForm: ModalDirective;
  @ViewChild('userMessage', { static: false }) userMessage: any;
  showChat = false;

  chatThread: ChatMessage[] = MOCKCHATS;
  modalRef: BsModalRef;
  constructor(private chatService: LiveChatService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  toggleChat() {
    this.showChat = !this.showChat;
  }

  openChat() {
    this.chatService.initChat();
    this.showChat = true;
  }

  sendMessage(val: string) {
    const msg: ChatMessage = {
      type: 'user',
      text: val,
      timestamp: new Date()
    }
    this.chatService.addMessage(msg);
  }

  closeChat() {
    this.showChat = false;
  }

}
