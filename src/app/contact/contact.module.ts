import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { CommonModule } from '@angular/common';
>>>>>>> d11a76e7131445e145afe6955fa3666046fc416d
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
<<<<<<< HEAD
    SharedModule
=======
    CommonModule
>>>>>>> d11a76e7131445e145afe6955fa3666046fc416d
  ]
})
export class ContactModule { }
