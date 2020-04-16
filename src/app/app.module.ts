import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CarouselModule, PopoverModule, CollapseModule, AlertModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule, PaginationModule, TypeaheadModule, ProgressbarModule, SortableModule, ButtonsModule, AccordionModule, TimepickerModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    CoreModule,
    SharedModule,
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
    ContactModule,
    BrowserAnimationsModule,
    ContactModule,
    HomeModule,
    TeamModule,
    ServicesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
