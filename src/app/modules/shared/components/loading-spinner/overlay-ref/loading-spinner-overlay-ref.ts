import { OverlayRef } from '@angular/cdk/overlay';

export class LoadingSpinnerOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
