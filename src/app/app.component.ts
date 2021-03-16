import { Component, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';
// import { CarouselConfig, CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';
// import { DataService } from './core/data.service';
// import { Router, ActivatedRoute, NavigationStart, RouterLink, RouterEvent } from '@angular/router';
// import { Observable } from 'rxjs';
// import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sure Marketing Solutions'.toUpperCase();
  ngOnInit() {
    AOS.init();
  }
  activated(e) {
    console.log(e)
  }
}
