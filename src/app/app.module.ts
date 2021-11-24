import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationEffects } from './modules/module-authentication/store/authentication.effects';
import * as fromLogin from './modules/module-authentication/store/authentication.reducer';
import { SignInService } from './modules/module-authentication/services/sign-in.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot({login: fromLogin.loginReducer}),
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
