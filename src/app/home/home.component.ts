import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TESTIMONIALS, Testimonial } from '../shared/meta/testimonials.data';
import { Contact, TOPICS } from '../shared/meta/contact';
import { ParallaxConfig } from 'ngx-parallax';
import { DataService } from '../core/data.service';

@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact: Contact = {
    firstName: '',
    lastName: '',
    phone: '',
    canCall: true,
    email: '',
    subject: '',
    message: '',
    topic: 'other'
  }
  config: ParallaxConfig = { initialValue: -50, ratio: .05 };
  testimonials: Testimonial[] = TESTIMONIALS;

  tabs = [
    {
      title: 'Our Mission',
      icon: 'fa-home',
      content: `Our mission is to provide solutions for engaging new leads, and generating higher user retention rates for our clients. By utiizing our experience and providing the necessary tools, we help businesses surpass all their customers expectations.`
    },
    {
      title: 'Our Vision',
      icon: 'fa-user',
      content: `Some content here`
    },
    {
      title: 'Our Value',
      icon: 'fa-envelope',
      content: `Some more content here`
    },
  ];

  contactTopics = TOPICS;
  canCall: boolean = true;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.canCall = this.contact.canCall;
  }

  toggleCanCall() {
    this.canCall = !this.canCall;
  }

  async addContact(data: Contact) {
    await this.dataService.addToCollection('contacts', data);
    this.contact = {
      firstName: '',
      lastName: '',
      phone: '',
      canCall: true,
      email: '',
      subject: '',
      message: '',
      topic: 'other'
    };
  }

}
