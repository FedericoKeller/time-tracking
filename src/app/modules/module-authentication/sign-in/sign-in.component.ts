import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';
import { SignInService } from '../services/sign-in.service';
import { login } from '../store/login-page.actions';

export interface AppStore {
  login: Credentials;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private signInService: SignInService, private store: Store<AppStore>, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(login({email: this.loginForm.get("email")?.value, password: this.loginForm.get("password")?.value}));
  }

}
