import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrequencyExpected, FrequencyService } from 'src/app/services/frequency.service';
import { ActivityAssets, ActivityData } from '../../module-dashboard';

export interface ActivityProperties {
  background:  string;
  icon: string;
}

const ACTIVITY_MAP: Record<ActivityAssets, ActivityProperties> = {
  "Work": {
    "background": "var(--light-orange)",
    "icon": "icon-work",
  },
  "Play": {
    "background": "var(--soft-blue)",
    "icon": "icon-play",
  },
  "Study": {
    "background": "var(--light-red)",
    "icon": "icon-study",
  },
  "Exercise": {
    "background": "var(--lime-green)",
    "icon": "icon-exercise",
  },
  "Social": {
    "background": "var(--color-violet)",
    "icon": "icon-social",
  },
  "Self Care": {
    "background": "var(--soft-orange)",
    "icon": "icon-self-care",
  }
}
@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input() data!: ActivityData;

  activityMap = ACTIVITY_MAP;

  frequency: Observable<FrequencyExpected>;

  constructor(private frequencyService: FrequencyService) {
    this.frequency = this.frequencyService.frequencyStateEvent;
   }

  ngOnInit() {
  }

}
