import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignInService } from 'src/app/services/sign-in.service';
import { AppState } from 'src/app/store/app.state';
import { sendForgotPasswordEmail } from 'src/app/auth/auth.actions';
import * as fromAuth from '../../../../auth/auth.selector';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private signInService: SignInService, private store: Store<AppState>) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  resetPassword(): void {
    this.store.dispatch(sendForgotPasswordEmail(this.forgotPasswordForm.value));


  }

}
