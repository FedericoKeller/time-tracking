import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GlobalRoutingModule } from './global-routing.module';

@NgModule({
  imports: [
    SharedModule,
    GlobalRoutingModule,
  ],
})
export class GlobalModule { }
