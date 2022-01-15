import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { autoLogout } from '../auth/auth.actions';

@Injectable()
export class AuthService {
  timeoutInterval: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {}

  login(email: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}auth/login`, email);
  }


  runTimeoutInterval(tokenExpiration: number) {
    const todaysDate = new Date().getTime();
    const expirationDate = new Date(tokenExpiration * 1000).getTime();
    const timeInterval = expirationDate - todaysDate;
    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
    }, timeInterval);
  }

  logout() {
    localStorage.removeItem('userToken');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}auth/register`, data);
  }
  sendResetPasswordEmail(email: any): Observable<any> {
    return this.httpClient.post(
      `${environment.apiUrl}auth/sendResetPasswordEmail`,
      email
    );
  }

  resetPassword(data: any): Observable<any> {
    return this.httpClient.post(
      `${environment.apiUrl}auth/resetPassword`,
      data
    );
  }

  getAccessToResetPassword(token: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}auth/reset/${token}`);
  }

  confirmAccount(token: string): Observable<any> {
    return this.httpClient.put(
      `${environment.apiUrl}auth/confirmation/${token}`,
      {}
    );
  }
}
