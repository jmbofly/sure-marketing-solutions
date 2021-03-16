import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxModule } from 'ngx-parallax';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { LoaderComponent } from './loader/loader.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CarouselModule as BsCarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule as OwlModule} from 'ngx-owl-carousel-o';
import { TestimonyComponent } from './testimony/testimony.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [QuoteSectionComponent, LoaderComponent, BackToTopComponent, TestimonyComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    OwlModule,
    ParallaxModule,
    // BsCarouselModule.forRoot(),
    // PopoverModule,
    // CollapseModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDropdownModule.forRoot(),
    // ModalModule.forRoot(),
    // TabsModule.forRoot(),
    // TooltipModule.forRoot(),
    // PaginationModule.forRoot(),
    // TypeaheadModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // SortableModule.forRoot(),
    // ButtonsModule.forRoot(),
    // AccordionModule.forRoot(),
    // TimepickerModule.forRoot(),
    // BsDatepickerModule.forRoot(),
  ],
  exports: [CommonModule, FormsModule,
    GoogleMapsModule,
    ParallaxModule,
    BsCarouselModule,
    PopoverModule,
    CollapseModule,
    AlertModule,
    BsDropdownModule,
    ModalModule,
    TabsModule,
    TooltipModule,
    PaginationModule,
    TypeaheadModule,
    ProgressbarModule,
    SortableModule,
    ButtonsModule,
    AccordionModule,
    TimepickerModule,
    OwlModule,
    QuoteSectionComponent,
    LoaderComponent,
    BackToTopComponent,
    TestimonyComponent,
    SafeHtmlPipe,],
  entryComponents: [QuoteSectionComponent, LoaderComponent, BackToTopComponent, TestimonyComponent]
})
export class SharedModule { }
