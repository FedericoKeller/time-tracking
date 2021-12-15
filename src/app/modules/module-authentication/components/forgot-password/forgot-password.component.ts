import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: SignInService) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  resetPassword(): void {
    this.authService.resetPassword({email: this.forgotPasswordForm.get('email')?.value}).subscribe(data => {
      console.log(data)
    })
  }

}
