import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IntroductionComponent } from './introduction.component';

const routes: Routes = [
  {
    path:'introduction',
    component: IntroductionComponent,
    children:[
      {
        path:'',
        component: AboutComponent,
        pathMatch:'full'
      }
    ]

  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
