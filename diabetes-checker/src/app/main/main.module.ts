import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { IntroductionModule } from './introduction/introduction.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MedicalBackgroundModule } from './medical-background/medical-background.module';
import { TreatmentHistoryModule } from './treatment-history/treatment-history.module';
import { ChatModule } from './chat/chat.module';
import { ChatSessionModule } from '../chat-session/chat-session.module';
import { PatientDataModule } from './patient-data/patient-data.module';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IntroductionModule,
    MedicalBackgroundModule,
    TreatmentHistoryModule,
    PatientDataModule,
    ChatModule,
    ChatSessionModule,
    RouterModule,
    MaterialModule
  ]
})
export class MainModule { }
