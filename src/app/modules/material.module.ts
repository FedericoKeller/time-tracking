import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatRippleModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
