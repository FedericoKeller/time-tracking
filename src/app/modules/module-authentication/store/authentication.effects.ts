import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { SignInService } from '../services/sign-in.service';
import { login } from './login-page.actions';

@Injectable()
export class AuthenticationEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) => this.signInService.login({
        email: action.email,
        password: action.password,
      })),
      map((action: any) => {
        return {
          type: '[Login Page] Login'
        }
      }),
      
    )
  );

  constructor(
    private actions$: Actions,
    private signInService: SignInService
  ) {}
}
