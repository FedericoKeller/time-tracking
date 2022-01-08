import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthResponse } from '../models/credentials.model';
import { User } from '../models/user.model';
import { SignInService } from '../services/sign-in.service';
import { AppState } from '../store/app.state';
import { setLoadingSpinnerClosed } from '../store/shared/shared.actions';
import * as fromAuth from './auth.actions';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private signInService: SignInService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.login),
      exhaustMap((action) =>
        this.signInService
          .login({
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((data: AuthResponse) => {
              this.store.dispatch(setLoadingSpinnerClosed());
              this.signInService.setTokenInLocalStorage(data);
              const user = this.signInService.formatUser(data);
              this.signInService.runTimeoutInterval(user.expDate);
              return fromAuth.loginSuccess({ user: user, redirect: true });
            })
          )
      ),
      catchError((error) => {
        this.store.dispatch(setLoadingSpinnerClosed());

        return throwError(error);
      })
    )
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuth.loginSuccess),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['dashboard']);
          }
        })
      ),
    { dispatch: false }
  );


  autoLogin$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(fromAuth.autoLogin),
      mergeMap((action) => {
          const user = this.signInService.getCurrentUser();
          this.signInService.runTimeoutInterval(user.expDate);
          return of(fromAuth.loginSuccess({user, redirect: true}))
      })
    )
  )

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuth.autoLogout),
        map((action) => {
          this.signInService.logout();
          this.router.navigate(['login']);
        })
      ),
      {dispatch: false}
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.register),
      exhaustMap((action) =>
        this.signInService
          .register({
            email: action.email,
            password: action.password,
            passwordConfirm: action.passwordConfirm,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(setLoadingSpinnerClosed());
              return fromAuth.registerSuccess(data);
            })
          )
      ),
      catchError((error) => {
        this.store.dispatch(setLoadingSpinnerClosed());
        return throwError(error);
      })
    )
  );

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.sendForgotPasswordEmail),
      exhaustMap((action) =>
        this.signInService
          .sendResetPasswordEmail({
            email: action.email,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(setLoadingSpinnerClosed());
              return fromAuth.sendForgotPasswordEmailSuccess(data);
            })
          )
      ),
      catchError((error) => {
        this.store.dispatch(setLoadingSpinnerClosed());
        return throwError(error);
      })
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.resetPassword),
      exhaustMap((action) =>
        this.signInService
          .resetPassword({
            email: action.email,
            password: action.password,
            passwordConfirm: action.passwordConfirm,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(setLoadingSpinnerClosed());
              return fromAuth.resetPasswordSuccess(data);
            })
          )
      ),
      catchError((error) => {
        this.store.dispatch(setLoadingSpinnerClosed());
        return throwError(error);
      })
    )
  );
}
