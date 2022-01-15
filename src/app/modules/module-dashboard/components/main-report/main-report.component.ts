import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {
  FrequencyExpected,
  FrequencyService,
} from 'src/app/services/frequency.service';
import { ActivityData, TotalActivity, TOTAL_ACTIVITY_TOKEN } from '../../index';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.scss'],
  providers: [
    {
      provide: TOTAL_ACTIVITY_TOKEN,
      useValue: TotalActivity,
    },
  ],
})
export class MainReportComponent implements OnInit {
  totalFrequencies: FrequencyExpected[] = ['daily', 'weekly', 'monthly'];

  activeButton: Record<FrequencyExpected, string> = {
    daily: '',
    weekly: 'active',
    monthly: '',
  };

  constructor(
    private frequencyService: FrequencyService,
    @Inject(TOTAL_ACTIVITY_TOKEN) public totalActivity: ActivityData[]
  ) {}

  ngOnInit() {}

  changeState(frequency: FrequencyExpected): void {
    for(let key of Object.keys(this.activeButton)){
      this.activeButton[key as FrequencyExpected] = '';
    }

    this.activeButton[frequency] = 'active';

    this.frequencyService.changeFrequencyState(frequency);
  }
}
