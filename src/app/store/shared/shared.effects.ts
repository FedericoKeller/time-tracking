import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { LoadingSpinnerOverlayRef } from "src/app/modules/shared/components/loading-spinner/overlay-ref/loading-spinner-overlay-ref";
import { OverlayService } from "src/app/services/overlay.service";
import { AppState } from "../app.state";
import * as fromShared from './shared.actions';

@Injectable()
export class SharedEffects {
  dialogRef!: LoadingSpinnerOverlayRef;

  constructor(
    private actions$: Actions,
    private overlayService: OverlayService,
    private router: Router,
    private store: Store<AppState>,
  ) {

  }

  setLoadingSpinnerOpen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromShared.setLoadingSpinnerOpen),
      tap((action) => {
        this.dialogRef = this.overlayService.open();
      })
    ),
    { dispatch: false }
  )

  setLoadingSpinnerClosed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromShared.setLoadingSpinnerClosed),
      tap(() => {
        this.dialogRef.close();
      }),
    ),
    { dispatch: false }
  )



}
