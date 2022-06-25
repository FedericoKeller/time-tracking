import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/auth/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinnerOpen } from 'src/app/store/shared/shared.actions';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  loginForm: FormGroup;


  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('test@test.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required]),
    })
  }

  ngOnInit() {
  }

  login() {
    if(this.loginForm.invalid) return;

    this.store.dispatch(setLoadingSpinnerOpen());
    this.store.dispatch(login(this.loginForm.value));
  }

}
