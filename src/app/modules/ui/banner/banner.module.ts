import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner.component';
import { BannerTitleService } from './services/banner-title.service';

const components: Type<any>[] = [
  BannerComponent
]

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    BannerTitleService
  ],
  declarations: components,
  exports: components,
})
export class BannerModule { }
