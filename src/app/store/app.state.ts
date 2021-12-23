import { AuthenticationReducer } from "../auth/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/auth.selector";
import { AuthState } from "../auth/auth.state";


export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
}


export const appReducer = {
  [AUTH_STATE_NAME]: AuthenticationReducer,
};
