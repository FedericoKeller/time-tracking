import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';

const components: Type<any>[] = [
  ActivityCardComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
})
export class ActivityCardModule { }
