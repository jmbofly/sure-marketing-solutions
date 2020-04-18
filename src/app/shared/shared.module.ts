import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxModule } from 'ngx-parallax';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { LoaderComponent } from './loader/loader.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CarouselModule as OwlModule } from 'ngx-owl-carousel-o';
import { TestimonyComponent } from './testimony/testimony.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [QuoteSectionComponent, LoaderComponent, BackToTopComponent, TestimonyComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    OwlModule,
    ParallaxModule,
  ],
  exports: [CommonModule, FormsModule,
    GoogleMapsModule,
    ParallaxModule,
    CarouselModule,
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
    TestimonyComponent,],
  entryComponents: [QuoteSectionComponent, LoaderComponent, BackToTopComponent, TestimonyComponent]
})
export class SharedModule { }
