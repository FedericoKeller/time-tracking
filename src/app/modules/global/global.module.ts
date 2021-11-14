import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { GlobalRoutingModule } from './global-routing.module';

@NgModule({
  imports: [
    SharedModule,
    GlobalRoutingModule,
  ],
})
export class GlobalModule { }
