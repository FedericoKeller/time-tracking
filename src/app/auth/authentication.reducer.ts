import { createReducer, on } from "@ngrx/store";
import { Credentials } from "../models/credentials.model";
import * as LoginActions from './login-page.actions'
export const initialState: Credentials = {
    email: null,
    password: null,
}

const _authenticationReducer = createReducer(
  initialState,
  on(LoginActions.login, (state, payload) => ({...state, email: payload.email, password: payload.password})),
  on(LoginActions.loginSuccess, (state, payload) => ({...state, user: payload.user})),
  on(LoginActions.reset, (state, payload) => ({...initialState})),

);

export function AuthenticationReducer(state: any, action: any) {
  return _authenticationReducer(state ,action);
}
