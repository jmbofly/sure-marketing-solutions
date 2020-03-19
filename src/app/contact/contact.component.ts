import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
export interface Contact {
  name: string,
  email: string,
  subject: string,
  message: string
}

@Component({
  selector: 'sms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactModel: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
  }

  async addNewContact(data) {
    await this.dataService.addToCollection('contacts', data).then(res => console.log('contact added', res))
    {


    }
