import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';

export const login = createAction(
  '[Login Page] Login',
  props<Credentials>()
);


export const reset = createAction(
  '[Login Page] Reset',
  props<Credentials>()
);
