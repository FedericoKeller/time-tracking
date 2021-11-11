import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { SharedModule } from '../../shared.module';
import { FrequencyService } from 'src/app/services/frequency.service';

const components: Type<any>[] = [
  ActivityCardComponent
]

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    FrequencyService,
  ],
  declarations: components,
  exports: components,
})
export class ActivityCardModule { }
