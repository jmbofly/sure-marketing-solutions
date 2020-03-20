import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { LoaderComponent } from './loader/loader.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [QuoteSectionComponent, LoaderComponent, BackToTopComponent],
  imports: [
    CommonModule,
    FormsModule
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
    QuoteSectionComponent,
    LoaderComponent,
    BackToTopComponent,],
  entryComponents: [QuoteSectionComponent, LoaderComponent, BackToTopComponent]
})
export class SharedModule { }
