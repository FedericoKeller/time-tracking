import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
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
  ],
  providers: [
  ]
})
export class AuthenticationModule { }
