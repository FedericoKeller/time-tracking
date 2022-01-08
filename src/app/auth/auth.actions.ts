import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';

export const login = createAction(
  '[Login Page] Login',
  props<Credentials>()
);

export const autoLogin = createAction(
  '[Login Page] Auto Login',
);

export const autoLogout = createAction(
  '[Login Page] Auto Logout',
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: User; redirect: boolean }>()
);


export const register = createAction(
  '[Register Page] Register',
  props<Credentials<"register">>()
);

export const registerSuccess = createAction(
  '[Register Page] Register Success',
  props<{message: string, userId: string}>()
)

export const sendForgotPasswordEmail = createAction(
  '[Forgot Password Page] Forgot Password',
  props<{email: string}>()
)

export const sendForgotPasswordEmailSuccess = createAction(
  '[Forgot Password Page] Forgot Password Success',
  props<{message: string}>()
)

export const resetPassword = createAction(
  '[Reset Password Page] Reset Password',
  props<Credentials<"reset">>()
)

export const resetPasswordSuccess = createAction(
  '[Reset Password Page] Reset Password Success',
  props<{message: string}>()
)
