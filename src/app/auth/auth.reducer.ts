import { createReducer, on } from "@ngrx/store";
import { Credentials } from "../models/credentials.model";
import * as AuthActions from './auth.actions'
export const initialState: Credentials = {
    email: null,
    password: null,
}

const _authenticationReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, payload) => ({...state, email: payload.email, password: payload.password})),
  on(AuthActions.loginSuccess, (state, payload) => ({...state, user: payload.user})),
  on(AuthActions.register, (state, payload) => ({...state, email: payload.email, password: payload.password, passwordConfirm: payload.passwordConfirm})),
  on(AuthActions.registerSuccess, (state) => state),
  on(AuthActions.sendForgotPasswordEmail, (state, payload) => ({...state, email: payload.email})),
  on(AuthActions.sendForgotPasswordEmailSuccess, (state) => state),
  on(AuthActions.resetPassword, (state, payload) => ({...state, email: payload.email, password: payload.password, passwordConfirm: payload.passwordConfirm}))

);

export function AuthenticationReducer(state: any, action: any) {
  return _authenticationReducer(state ,action);
}
