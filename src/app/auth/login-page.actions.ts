import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';

export const login = createAction(
  '[Login Page] Login',
  props<Credentials>()
);


export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: User; redirect: boolean }>()
);

export const reset = createAction(
  '[Login Page] Reset',
  props<Credentials>()
);
