import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sms-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
