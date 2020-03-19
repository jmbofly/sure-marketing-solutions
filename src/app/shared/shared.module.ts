import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
    TimepickerModule,]
})
export class SharedModule { }
