import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export type SnackBarPanelClass = 'error-snackbar' | 'success-snackbar' | 'warning-snackbar';

@Injectable({
    providedIn: 'root',
})
export class SnackBarService {

    constructor(
        private matSnackBar: MatSnackBar,
        private ngZone: NgZone,
    ) {}

    open(message: string, action: string, duration: number, panelClass?: SnackBarPanelClass) {
    this.ngZone.run(() => {
            this.matSnackBar.open(message, action, {
                duration: duration,
                panelClass: panelClass,
            });
        });
    }
}
