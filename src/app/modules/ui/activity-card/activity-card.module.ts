import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { SharedModule } from '../../shared.module';

const components: Type<any>[] = [
  ActivityCardComponent
]

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: components,
  exports: components,
})
export class ActivityCardModule { }
