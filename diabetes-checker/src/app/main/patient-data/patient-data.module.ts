import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDataRoutingModule } from './patient-data-routing.module';
import { AddMedicationDialogComponent } from './add-medication-dialog/add-medication-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SymptomsQuestionsComponent } from './symptoms-questions/symptoms-questions.component';
import { BloodSugarTestComponent } from './blood-sugar-test/blood-sugar-test.component';
import { DiabetesComplicationsComponent } from './diabetes-complications/diabetes-complications.component';
import { PastMedicationsComponent } from './past-medications/past-medications.component';
import { HeathMaintainanceComponent } from './heath-maintainance/heath-maintainance.component';


@NgModule({
  declarations: [
    AddMedicationDialogComponent,
    SymptomsQuestionsComponent,
    BloodSugarTestComponent,
    DiabetesComplicationsComponent,
    PastMedicationsComponent,
    HeathMaintainanceComponent
  ],
  imports: [
    CommonModule,
    PatientDataRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientDataModule { }
