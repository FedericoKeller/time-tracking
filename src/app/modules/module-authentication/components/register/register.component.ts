import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignInService } from 'src/app/services/sign-in.service';
import { AppState } from 'src/app/store/app.state';
import { register } from 'src/app/auth/auth.actions';
import { setLoadingSpinnerOpen } from 'src/app/store/shared/shared.actions';

const passwordErrorValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const pass = group.get('password');
  const confirmPass = group.get('passwordConfirm');

  return pass?.value != confirmPass?.value ? { 'passwordError': true } : null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private readonly fb: FormBuilder, private signInService: SignInService, private store: Store<AppState>) {

    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      passwordsGroup: this.fb.group(
        {
          password: new FormControl('', [Validators.required]),
          passwordConfirm: new FormControl('', [Validators.required]),
        },
        { validators: passwordErrorValidator }
      ),
    });

  }

  ngOnInit() {
  }

  register(): void {
    const mergedForm = {email: this.registerForm.value.email, ...this.registerForm.controls.passwordsGroup.value};
    this.store.dispatch(setLoadingSpinnerOpen());
   this.store.dispatch(register(mergedForm))
  }
}
