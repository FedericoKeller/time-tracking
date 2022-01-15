import { NgModule } from '@angular/core';
import { MainReportComponent } from './components/main-report/main-report.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../ui/card/card.module';
import { FrequencyService } from 'src/app/modules/module-dashboard/services/frequency.service';
import { SharedModule } from '../shared/shared.module';
import { ActivityReportComponent } from './components/main-report/activity-report/activity-report.component';
import { BannerModule } from '../ui/banner/banner.module';

const routes: Routes = [
  {
    path: "",
    component: MainReportComponent
  },
  {
    path: "dashboard",
    component: MainReportComponent,
  }
]

@NgModule({
  imports: [
    BannerModule,
    CardModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    MainReportComponent,
    ActivityReportComponent
  ],
  providers: [
    FrequencyService,
  ]
})
export class DashboardModule { }
