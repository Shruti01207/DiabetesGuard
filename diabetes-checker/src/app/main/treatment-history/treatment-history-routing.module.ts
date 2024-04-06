import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisHistoryComponent } from './diagnosis-history/diagnosis-history.component';

const routes: Routes = [
  
    {
      path: 'diagnosis-history',
      component: DiagnosisHistoryComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentHistoryRoutingModule { }
