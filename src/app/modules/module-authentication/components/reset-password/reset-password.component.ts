import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { resetPassword } from 'src/app/auth/auth.actions';
import { Store } from '@ngrx/store';
import { setLoadingSpinnerOpen } from 'src/app/store/shared/shared.actions';

const passwordErrorValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const pass = group.get('password');
  const confirmPass = group.get('passwordConfirm');

  return pass?.value != confirmPass?.value ? { 'passwordError': true } : null;
};


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordsGroup: FormGroup;
  email: Data;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
    this.passwordsGroup = this.fb.group(
      {
        password: new FormControl('', [Validators.required]),
        passwordConfirm: new FormControl('', [Validators.required]),
      },
      { validators: passwordErrorValidator }
    )

    this.email = {...this.activatedRoute.snapshot.data};
  }

  ngOnInit() {

  }

  resetPassword(): void {
    if(this.passwordsGroup.invalid) return;

    const mergedForm = {...this.email, ...this.passwordsGroup.value};
    this.store.dispatch(setLoadingSpinnerOpen());
    this.store.dispatch(resetPassword(mergedForm));
  }

}
