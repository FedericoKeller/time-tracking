import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

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

  constructor(private fb: FormBuilder, private signInService: SignInService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.passwordsGroup = this.fb.group(
      {
        password: new FormControl('', [Validators.required]),
        passwordConfirm: new FormControl('', [Validators.required]),
      },
      { validators: passwordErrorValidator }
    )

    this.email = activatedRoute.snapshot.data;
    console.log(this.email.email)
  }

  ngOnInit() {

  }

  resetPassword(): void {
    this.signInService.resetPassword({email: this.email.email, ...this.passwordsGroup.value}).subscribe(data => {
      this.router.navigate(["login"]);
    })
  }

}
