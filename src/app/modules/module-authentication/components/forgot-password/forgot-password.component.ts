import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { sendForgotPasswordEmail } from 'src/app/auth/auth.actions';
import { setLoadingSpinnerOpen } from 'src/app/store/shared/shared.actions';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  get email() {
    return this.forgotPasswordForm.get('email') as FormControl;
  }

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.forgotPasswordForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit() {
  }

  resetPassword(): void {
    if(this.forgotPasswordForm.invalid) return;

    this.store.dispatch(setLoadingSpinnerOpen());
    this.store.dispatch(sendForgotPasswordEmail(this.forgotPasswordForm.value));


  }

}
