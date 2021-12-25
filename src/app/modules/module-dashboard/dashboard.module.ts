import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportComponent } from './components/main-report/main-report.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCardModule } from '../ui/activity-card/activity-card.module';
import { FrequencyService } from 'src/app/services/frequency.service';
import { SharedModule } from '../shared/shared.module';

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
    ActivityCardModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [MainReportComponent],
  providers: [
    FrequencyService,
  ]
})
export class DashboardModule { }
