import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './services/sign-in.service';
import { RegisterComponent } from './register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './store/authentication.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/authentication.reducer';
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
    EffectsModule.forFeature([AuthenticationEffects]),
    StoreModule.forFeature(fromLogin.loginFeaturedKey, fromLogin.loginReducer),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SignInComponent,
    RegisterComponent,
  ],
  providers: [
    SignInService,
  ]
})
export class AuthenticationModule { }
