import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSessionComponent } from './chat-session.component';
import { BotComponent } from './bot/bot.component';

const routes: Routes = [
  {
    path:'chat-session',
    component: ChatSessionComponent,
    children:[
      {
        path:'',
        component:BotComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatSessionRoutingModule { }
