import { NgModule } from '@angular/core';
import { LiveChatComponent } from './live-chat.component';
import { SharedModule } from '../shared/shared.module';
import { LiveChatService } from './live-chat.service';



@NgModule({
  declarations: [LiveChatComponent],
  imports: [
    SharedModule
  ],
  entryComponents: [LiveChatComponent],
  exports: [LiveChatComponent],
  providers: [LiveChatService]
})
export class LiveChatModule { }
