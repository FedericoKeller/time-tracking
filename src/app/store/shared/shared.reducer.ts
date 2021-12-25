import { Action, createReducer, on } from "@ngrx/store";
import { setLoadingSpinnerClosed, setLoadingSpinnerOpen } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinnerOpen, (state) => state),
  on(setLoadingSpinnerClosed, (state) => state),
)

export function SharedReducer(state: any, action: Action) {
  console.log(state, action)
  return _sharedReducer(state, action);

}
