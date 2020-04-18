import { Component, OnInit, Input } from '@angular/core';
import { ParallaxConfig } from 'ngx-parallax';
import { DataService } from 'src/app/core/data.service';

export interface Quote {
  first?: string;
  last?: string;
  guidance?: string;
  phone?: string;
  message?: string;
}
@Component({
  selector: 'sms-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit {
  @Input() text = `Ready to take the next step, or just need some direction? Fill out this form for a free consultation and quote.`
  parallaxConfig: ParallaxConfig = {
    initialValue: -500,
    ratio: .7
  }

  quoteModel: Quote = {
    first: '',
    last: '',
    guidance: '',
    phone: '',
    message: '',
  }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  async addNewQuoteSubmition(data: Quote) {
    await this.dataService.addToCollection<Quote>('quotes', data).then(res => console.log('quote submitted', res))
  }

}
