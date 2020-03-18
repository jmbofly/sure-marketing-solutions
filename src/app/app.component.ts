import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';
import AOS from 'aos';
import { CarouselConfig, CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sure-marketing-solutions';
  ngOnInit() {
    AOS.init();
  }

  testimonies = [
    {
      img: 'person_1.jpg',
      caption: `I am very impressed with Sure Marketing Solutions. Proffesional and attentive. I will absolutley reccomend them to everyone.`,
      name: `Kevin Szkolnik`,
      position: 'GTS, CEO'
    },
    {
      img: 'person_2.jpg',
      caption: `I had no idea that my business had this much potential! Thanks for your hardwork.`,
      name: `Henry Dee`,
      position: 'MedTelPlus, VP of Marketing'
    },
    {
      img: 'person_3.jpg',
      caption: `Amazing work everyone!`,
      name: `Henry Dee`,
      position: 'Rev-lite Automotive Repairs, Co-owner'
    },
    {
      img: 'person_4.jpg',
      caption: `When other businesses are losing customers, we have done better than ever. Thanks team!`,
      name: 'Richard Smith',
      position: 'The Garlic Rose Eatery, Owner'
    },
    {
      img: 'person_1.jpg',
      caption: `Beautiful website. We love it! Thank you!!!! :)`,
      name: `Ken Bosh`,
      position: 'Inlay Shine Designs, Owner'
    },
    {
      img: 'person_2.jpg',
      caption: `I had no idea that my business had this much potential! Thanks for your hardwork.`,
      name: `Henry Dee`,
      position: 'MedTelPlus, VP of Marketing'
    },
  ]

  slideChange(event, carousel: any, s1: SlideComponent, s2: ElementRef) {
    // console.log(carousel, s1, s2)
  }
}
