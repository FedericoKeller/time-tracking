import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { autoLogin } from './auth/auth.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'time-tracking';

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(autoLogin());
  }
}
