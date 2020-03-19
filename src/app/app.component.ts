import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';
import AOS from 'aos';
import { CarouselConfig, CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';
import { DataService } from './core/data.service';

@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sure Marketing Solutions'.toUpperCase();

  constructor(private data: DataService) { }
  ngOnInit() {
    AOS.init();
    // this.data.addToCollection<{ name: string }>('test', { name: 'test' })
  }
}
