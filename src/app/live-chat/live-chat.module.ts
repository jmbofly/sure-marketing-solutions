import { NgModule } from '@angular/core';
import { LiveChatComponent } from './live-chat.component';
import { SharedModule } from '../shared/shared.module';
import { LiveChatService } from './services/live-chat.service';
import { UserService } from './services/user.service';
import { SupportService } from './services/support.service';
import { ModalFormComponent } from './modal-form/modal-form.component';



@NgModule({
  declarations: [LiveChatComponent, ModalFormComponent],
  imports: [
    SharedModule
  ],
  entryComponents: [LiveChatComponent, ModalFormComponent],
  exports: [LiveChatComponent, ModalFormComponent],
  providers: [LiveChatService, UserService, SupportService]
})
export class LiveChatModule { }
