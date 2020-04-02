import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  chatSupportId: string;

  constructor() {
    this.chatSupportId = `${Math.floor(Math.random() * 100) * Date.now()}`;
  }

  findResponse(query: string) {
    const keywords = query.split(', ');
    console.log('chat response results', keywords);
  }
}
