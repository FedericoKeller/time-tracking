import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatRippleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
