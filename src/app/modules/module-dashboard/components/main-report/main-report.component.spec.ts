/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainReportComponent } from './main-report.component';

describe('MainReportComponent', () => {
  let component: MainReportComponent;
  let fixture: ComponentFixture<MainReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
