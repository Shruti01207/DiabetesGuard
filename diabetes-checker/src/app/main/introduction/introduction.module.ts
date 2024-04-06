import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { IntroductionComponent } from './introduction.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutComponent,
    TermsConditionsComponent,
    IntroductionComponent,

  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class IntroductionModule { }
