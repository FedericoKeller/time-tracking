import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { SignInService } from '../services/sign-in.service';
import * as fromLogin from './login-page.actions';

@Injectable()
export class AuthenticationEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLogin.login),
      exhaustMap((action) => this.signInService.login({
        email: action.email,
        password: action.password,
      }).pipe(
        map((user: User) => {
          return fromLogin.loginSuccess({user: user, redirect: true})
        }),
      )),
      catchError(error => {
        return throwError(error);
      }),
    ),
  );


  loginRedirect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromLogin.loginSuccess),
    tap((action) => {
      if(action.redirect) {
        this.router.navigate(["dashboard"]);
      }
    })
  ), {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private signInService: SignInService,
    private router: Router,
  ) {}
}
