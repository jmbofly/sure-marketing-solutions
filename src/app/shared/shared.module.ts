import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [QuoteSectionComponent, LoaderComponent],
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
    LoaderComponent,],
  entryComponents: [QuoteSectionComponent, LoaderComponent]
})
export class SharedModule { }
