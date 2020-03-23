import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions, BreakpointOptions, CarouselComponent, CarouselSlideDirective, SlidesOutputData, ResponsiveSettings } from 'ngx-owl-carousel-o';
import { TESTIMONIALS, Testimonial } from '../meta/testimonials.data';
@Component({
  selector: 'sms-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  @Input() name = 'home';
  @Input() slideData: Testimonial[] = TESTIMONIALS;
  customOptions: OwlOptions = {
    loop: true,
    lazyLoad: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 3,
    navSpeed: 700,
    autoHeight: true,
    margin: 14,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    dots: true,
    animateIn: 'slideInLeft',
    animateOut: 'slideOutRight',
    autoplay: true,
    responsiveRefreshRate: 1000,
    responsive: {
      0: {
        items: 1
      },
      760: {
        items: 3
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  getPassedData(e) {
    console.log('slide data', e)
  }

}
