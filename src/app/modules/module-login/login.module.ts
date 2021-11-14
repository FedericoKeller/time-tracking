import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SignInComponent
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
  ]
})
export class LoginModule { }
