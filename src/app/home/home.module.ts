import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
