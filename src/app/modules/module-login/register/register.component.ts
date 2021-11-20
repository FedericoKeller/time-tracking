import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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


  constructor(private readonly fb: FormBuilder) {
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
}
