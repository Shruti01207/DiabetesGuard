import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DiagnoseComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MaterialModule
  ]
})
export class ChatModule { }
