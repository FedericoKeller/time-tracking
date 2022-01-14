import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrequencyExpected, FrequencyService } from 'src/app/services/frequency.service';
import { ActivityAssets, ActivityData } from '../../..';

export interface ActivityProperties {
  background:  string;
  icon: string;
}

@Component({
  selector: 'app-activity-report',
  templateUrl: './activity-report.component.html',
  styleUrls: ['./activity-report.component.scss']
})
export class ActivityReportComponent implements OnInit {
  @Input() data!: ActivityData;

  frequency: Observable<FrequencyExpected>

  constructor(private frequencyService: FrequencyService) {
    this.frequency = this.frequencyService.frequencyStateEvent;
   }

  ngOnInit() {
  }

}
