import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportComponent } from './main-report/main-report.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCardModule } from '../ui/activity-card/activity-card.module';
import { FrequencyService } from 'src/app/services/frequency.service';

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
    CommonModule,
    ActivityCardModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MainReportComponent],
  providers: [
    FrequencyService,
  ]
})
export class DashboardModule { }
