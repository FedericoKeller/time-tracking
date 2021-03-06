import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthenticationEffects } from './auth/auth.effects';
import * as fromLogin from './auth/auth.reducer';
import { AuthService } from './services/auth.service';
import { appReducer } from './store/app.state';
import { SharedEffects } from './store/shared/shared.effects';
import { MainInterceptor } from './interceptors/main.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthenticationEffects, SharedEffects]),
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MainInterceptor,
        multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
