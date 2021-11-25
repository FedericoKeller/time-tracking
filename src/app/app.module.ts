import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthenticationEffects } from './auth/authentication.effects';
import * as fromLogin from './auth/authentication.reducer';
import { SignInService } from './services/sign-in.service';
import { appReducer } from './store/app.state';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    SignInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
