import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
=======
import { CarouselModule, PopoverModule } from 'ngx-bootstrap';
import { ContactModule } from './contact/contact.module';
>>>>>>> d11a76e7131445e145afe6955fa3666046fc416d
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
<<<<<<< HEAD
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    TimepickerModule.forRoot(),
    ContactModule,
    AppRoutingModule,
=======
    BrowserAnimationsModule,
    ContactModule
>>>>>>> d11a76e7131445e145afe6955fa3666046fc416d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
