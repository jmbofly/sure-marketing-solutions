import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS, Testimonial } from '../shared/meta/testimonials.data';

@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonials: Testimonial[] = TESTIMONIALS;
  constructor() { }

  ngOnInit(): void {
  }

}
