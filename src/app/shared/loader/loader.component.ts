import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'sms-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean>;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(url: string) {
    return this.router.navigateByUrl(url, /* Removed unsupported properties by Angular migration: relativeTo. */ {})
  }

  load(url = null) {
    this.loading$ = new Observable(obs => {
      obs.next(true);
      if (url) {
        setTimeout(() => {
          this.navigateTo(url)
            .then(() => {
              window.scrollTo(0, 0);
            });
          obs.next(false);
        }, 1000);
      } else {
        setTimeout(() => {
          obs.next(false);
        }, 1000);
      }
    });
    return false;
  }

}
