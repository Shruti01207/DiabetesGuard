import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentHistoryRoutingModule } from './treatment-history-routing.module';
import { DiagnosisHistoryComponent } from './diagnosis-history/diagnosis-history.component';
import { DiagnosisHistoryDialogComponent } from './diagnosis-history-dialog/diagnosis-history-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiagnosisHistoryComponent,
    DiagnosisHistoryDialogComponent
  ],
  imports: [
    CommonModule,
    TreatmentHistoryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TreatmentHistoryModule { }
