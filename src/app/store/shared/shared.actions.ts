import { createAction, props } from "@ngrx/store";
import { LoadingSpinnerOverlayRef } from "src/app/modules/shared/components/loading-spinner/overlay-ref/loading-spinner-overlay-ref";


export const setLoadingSpinnerOpen = createAction(
  '[Shared State] Set Loading Spinner Open',
)

export const setLoadingSpinnerClosed = createAction(
  '[Shared State] Set Loading Spinner Closed',
)
