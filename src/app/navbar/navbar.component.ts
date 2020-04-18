import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterLink, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
@Component({
  selector: 'sms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('loader') loader: any;

  navStart: any;
  active = 'home';
  showMenu: boolean;

  constructor(private router: Router, public route: ActivatedRoute) {
    this.navStart = this.router.events.pipe(
      filter((evt: RouterEvent) => evt instanceof NavigationStart),
      tap(evt => {
        this.active = (evt.url === '/' || evt.url.includes('home')) ? 'home' : evt.url.slice(1);
      })
    ) as Observable<NavigationStart>;
  }
  ngOnInit() {
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
    // this.active = url;
    this.loader.load(url);
    this.showMenu = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}