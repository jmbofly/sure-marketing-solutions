import { Injectable } from '@angular/core';
import { ChatMessage } from '../live-chat';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  chatSupportId: string;

  constructor() {
    this.chatSupportId = `${Math.floor(Math.random() * 100) * Date.now()}`;
  }

  initSupport(config?: any) {
    const supportWelcome: ChatMessage = {
      type: 'support',
      timestamp: new Date(),
      body: `<b>Welcome to Live Chat!</b><br> I'm Adam, Sure Marketing Solutions support chat bot.<br> I can answer questions stored in our Frequently Asked Questions database.<br> How can I help you?<br><br>
      <button class="btn btn-outline-secondary mb-2" (click)="getSupportResponseMessage('here is the response')">Here is one option</button><br><button class="btn btn-outline-secondary mb-2">Here is another option</button><br><button class="btn btn-outline-secondary">Here is the last option</button>`
    };
    return Promise.resolve(supportWelcome);
  }

  findResponse(query: any) {
    const keywords = query.split(', ');
    console.log('chat response results', keywords);
  }
}
