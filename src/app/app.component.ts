import { Component, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import AOS from 'aos';
import { CarouselConfig, CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';
import { DataService } from './core/data.service';
import { Router, ActivatedRoute, NavigationStart, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('loader') loader: any;
  title = 'Sure Marketing Solutions'.toUpperCase();
  navStart: any;
  active = 'home';
  showMenu: boolean;


  constructor(private data: DataService, private router: Router, public route: ActivatedRoute) {
    this.navStart = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }
  ngOnInit() {
    AOS.init();
    this.navStart.subscribe(evt => {
      if (evt) {
        this.loader.load();
      }
    });
    if (document.body.clientWidth >= 991) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }

  isActive(link) {
    return (this.active === link);
  }

  navigation(url) {
    this.active = url;
    this.loader.load(url);
    this.showMenu = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
