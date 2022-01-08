import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/auth/auth.actions';
import { SignInService } from 'src/app/services/sign-in.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinnerOpen } from 'src/app/store/shared/shared.actions';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  

  constructor(private signInService: SignInService, private store: Store<AppState>, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(setLoadingSpinnerOpen());
    this.store.dispatch(login(this.loginForm.value));
  }

}
