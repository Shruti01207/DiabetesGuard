import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ChatService } from './services/chat.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers:[
    ChatService
  ]
})
export class SharedModule { }
