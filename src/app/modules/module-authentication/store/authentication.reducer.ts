import { createReducer, on } from "@ngrx/store";
import { Credentials } from "../models/credentials.model";
import * as LoginActions from '../store/login-page.actions'
export const initialState: Credentials = {
    email: null,
    password: null,
}

export const loginFeaturedKey = 'login';

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state, payload) => ({email: payload.email, password: payload.password}))
);
