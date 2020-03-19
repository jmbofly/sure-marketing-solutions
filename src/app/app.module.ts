import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
<<<<<<< HEAD
import { TeamModule } from './team/team.module';
=======
import { GoogleMapsModule } from '@angular/google-maps';
import { ServicesModule } from './services/services.module';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
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
    SharedModule,
    CoreModule,
    ContactModule,
    BrowserAnimationsModule,
    ContactModule,
    HomeModule,
<<<<<<< HEAD
    TeamModule,
=======
    ServicesModule,
>>>>>>> dev
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
