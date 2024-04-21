import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutComponent } from './introduction/about/about.component';
import { TermsConditionsComponent } from './introduction/terms-conditions/terms-conditions.component';
import { DiabetesStatusComponent } from './medical-background/diabetes-status/diabetes-status.component';
import { FamilyHistoryComponent } from './medical-background/family-history/family-history.component';
import { MedicalConditionsComponent } from './medical-background/medical-conditions/medical-conditions.component';
import { DiagnosisHistoryComponent } from './treatment-history/diagnosis-history/diagnosis-history.component';
import { DiagnoseComponent } from './chat/diagnose/diagnose.component';
import { AddMedicationDialogComponent } from './patient-data/add-medication-dialog/add-medication-dialog.component';
import { SymptomsQuestionsComponent } from './patient-data/symptoms-questions/symptoms-questions.component';
import { BloodSugarTestComponent } from './patient-data/blood-sugar-test/blood-sugar-test.component';
import { DiabetesComplicationsComponent } from './patient-data/diabetes-complications/diabetes-complications.component';
import { PastMedicationsComponent } from './patient-data/past-medications/past-medications.component';
import { HeathMaintainanceComponent } from './patient-data/heath-maintainance/heath-maintainance.component';
import { DiabetesManagementComponent } from './results/diabetes-management/diabetes-management.component';

const routes: Routes = [

  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      },
      {
        path: 'diabetes-status',
        component: DiabetesStatusComponent
      },
      {
        path: 'family-history',
        component: FamilyHistoryComponent
      },
      {
        path: 'medical-condition',
        component: MedicalConditionsComponent
      },
      {
        path: 'diagnosis-history',
        component: DiagnosisHistoryComponent
      },
      {
        path: 'chat',
        component: DiagnoseComponent
      },
      {
        path: 'past-medication',
        component: PastMedicationsComponent
      },
      {
        path: 'current-symptoms',
        component: SymptomsQuestionsComponent
      },
      {
        path: 'blood-test',
        component: BloodSugarTestComponent
      },
      {
        path: 'diabetes-complications',
        component: DiabetesComplicationsComponent
      },
      {
        path: 'health-maintainance',
        component: HeathMaintainanceComponent
      },
      {
        path:'risk-factors',
        component: HeathMaintainanceComponent
      },
      {
        path:'diabetes-management',
        component: DiabetesManagementComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
