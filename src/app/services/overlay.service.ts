import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoadingSpinnerComponent } from '../modules/shared/components/loading-spinner/loading-spinner.component';
import { LoadingSpinnerOverlayRef } from '../modules/shared/components/loading-spinner/overlay-ref/loading-spinner-overlay-ref';

// Each property can be overridden by the consumer
interface LoadingSpinnerConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: LoadingSpinnerConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-loading-spinner-panel'
}

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private overlay: Overlay) {}

  open(config: LoadingSpinnerConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

     // Instantiate remote control
     const dialogRef = new LoadingSpinnerOverlayRef(overlayRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const loadingSpinnerPortal = new ComponentPortal(LoadingSpinnerComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(loadingSpinnerPortal);

    return dialogRef;

  }


  getOverlayConfig(config: LoadingSpinnerConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    })

    console.log(overlayConfig)

    return overlayConfig;
  }

  createOverlay(config: LoadingSpinnerConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }
}
