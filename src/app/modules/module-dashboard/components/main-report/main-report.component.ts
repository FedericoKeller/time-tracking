import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FrequencyExpected, FrequencyService } from 'src/app/services/frequency.service';
import { TotalActivity } from '../../index';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.scss']
})
export class MainReportComponent implements OnInit, AfterViewInit {

  totalActivity = TotalActivity;
  totalFrequencies: FrequencyExpected[] = ["daily", "weekly", "monthly"];

  @ViewChildren("frequencyItem") frequencyItems!: QueryList<MatButton>;
  frequencyItemsList: MatButton[] = [];

  lastActiveItem: string | null = null;
  lastActiveItemIndex: number | null = null;

  constructor(private frequencyService: FrequencyService, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.frequencyItemsList = this.frequencyItems.toArray();
    this.changeState();
  }

  changeState(frequency?: FrequencyExpected): void {

    this.updateCurrentItem();
    console.log(this.frequencyItemsList)
    this.renderer.removeClass(this.frequencyItemsList[this.lastActiveItemIndex!]._elementRef.nativeElement, "active");

    if (this.isDefined(frequency)) {
      this.frequencyService.changeFrequencyState(frequency);
    }

    this.updateCurrentItem();

    this.renderer.addClass(this.frequencyItemsList[this.lastActiveItemIndex!]._elementRef.nativeElement, "active");
  }


  isDefined<T>(val: T | undefined | null): val is T {
    return val !== undefined && val !== null;
  }

  updateCurrentItem(): void {
    this.lastActiveItem = this.frequencyService.getCurrentFrequencyState();
    this.lastActiveItemIndex = this.totalFrequencies.findIndex(item => item == this.lastActiveItem);
  }

}

