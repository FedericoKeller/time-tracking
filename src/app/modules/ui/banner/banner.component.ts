import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { ActivityAssets } from '../../module-dashboard';
import { ActivityProperties } from '../../module-dashboard/components/main-report/activity-report/activity-report.component';
import { BannerTitleService } from './services/banner-title.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() title!: ActivityAssets;
  activityProps!: ActivityProperties;

  constructor(private bannerTitleService: BannerTitleService) {}

  ngOnInit() {
    this.activityProps = this.bannerTitleService.getCurrentProps(this.title);
  }

}
