import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { DiabetesManagementComponent } from './diabetes-management/diabetes-management.component';


@NgModule({
  declarations: [
    DiabetesManagementComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
