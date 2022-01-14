import { NgModule, Type } from '@angular/core';
import { CardComponent } from './card.component';
import { SharedModule } from '../../shared/shared.module';

const components: Type<any>[] = [
  CardComponent
]

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: components,
  exports: components,
})
export class CardModule { }
