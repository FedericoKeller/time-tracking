import { AuthenticationReducer } from "../auth/authentication.reducer";
import { AUTH_STATE_NAME } from "../auth/authentication.selector";
import { AuthState } from "../auth/authentication.state";


export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
}


export const appReducer = {
  [AUTH_STATE_NAME]: AuthenticationReducer,
};
