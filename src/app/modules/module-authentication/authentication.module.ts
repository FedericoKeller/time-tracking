import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountVerificationGuard } from './guards/account-verification.guard';
import { RegisterComponent } from './components/register/register.component';
import { SignInService } from 'src/app/services/sign-in.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivateChild: [
      AccountVerificationGuard
    ],
    children: [
      {
        path: ':token' ,
      }
    ]
  },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  providers: [
    AccountVerificationGuard,
    SignInService,
  ]
})
export class AuthenticationModule { }
