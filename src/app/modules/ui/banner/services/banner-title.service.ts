import { Injectable } from '@angular/core';
import { ActivityAssets } from 'src/app/modules/module-dashboard';
import { ACTIVITY_MAP } from '../utilities/activities.token';

@Injectable()

export class BannerTitleService {

constructor() { }

  getCurrentProps(title: ActivityAssets) {
    return ACTIVITY_MAP[title];
  }

}
