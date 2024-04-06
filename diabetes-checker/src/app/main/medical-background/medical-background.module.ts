import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalBackgroundRoutingModule } from './medical-background-routing.module';
import { DiabetesStatusComponent } from './diabetes-status/diabetes-status.component';
import { FamilyHistoryComponent } from './family-history/family-history.component';
import { FamilyHistoryDialogComponent } from './family-history-dialog/family-history-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MedicalConditionsComponent } from './medical-conditions/medical-conditions.component';
import { MedicalConditionsDialogComponent } from './medical-conditions-dialog/medical-conditions-dialog.component';


@NgModule({
  declarations: [
    DiabetesStatusComponent,
    FamilyHistoryComponent,
    FamilyHistoryDialogComponent,
    MedicalConditionsComponent,
    MedicalConditionsDialogComponent,
  ],
  imports: [
    CommonModule,
    MedicalBackgroundRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ]
})
export class MedicalBackgroundModule { }
