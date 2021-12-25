import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
