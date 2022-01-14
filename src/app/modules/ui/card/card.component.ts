import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content select="[header]"></ng-content>
      <div class="container">
        <button mat-icon-button (click)="$event.preventDefault()">
          <mat-icon>more_horiz</mat-icon>
        </button>
        <mat-card matRipple>
          <ng-content select="[body]"></ng-content>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
