import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [{
      path: '',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignUpComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
