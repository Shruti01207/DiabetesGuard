import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatSessionRoutingModule } from './chat-session-routing.module';
import { BotComponent } from './bot/bot.component';
import { ChatSessionComponent } from './chat-session.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BotComponent,
    ChatSessionComponent
  ],
  imports: [
    CommonModule,
    ChatSessionRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ChatSessionModule { }
