import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { LoaderComponent } from './loader/loader.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CarouselModule as OwlModule } from 'ngx-owl-carousel-o';
import { TestimonyComponent } from './testimony/testimony.component';

@NgModule({
  declarations: [QuoteSectionComponent, LoaderComponent, BackToTopComponent, TestimonyComponent],
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
  ],
  exports: [CommonModule, FormsModule,
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
