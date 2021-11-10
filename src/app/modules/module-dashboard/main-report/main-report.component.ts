import { Component, OnInit } from '@angular/core';
import { TotalActivity }  from '../index';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.scss']
})
export class MainReportComponent implements OnInit {

  totalActivity = TotalActivity;

  constructor() { }

  ngOnInit() {
  }

}

