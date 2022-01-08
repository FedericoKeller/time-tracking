import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, CreatedUser } from '../models/credentials.model';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import jwt_decode from 'jwt-decode';
import { autoLogout } from '../auth/auth.actions';

@Injectable()
export class SignInService {
  timeoutInterval: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {}

  login(email: any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}auth/login`, email);
  }

  formatUser(data: AuthResponse) {
    const decodedUser = this.getDecodedAccessToken(data.token);

    const user = new User (
      decodedUser.email,
      decodedUser.userId,
      decodedUser.exp
    )

    return user;

  }

  getDecodedAccessToken(token: string): CreatedUser {

    try {
        return jwt_decode(token);
    }
    catch(error: any){
        throw error;
    }
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

  setTokenInLocalStorage(data: AuthResponse) {
    localStorage.setItem('userToken', data.token);
  }

  getTokenFromLocalStorage() {
    const token = localStorage.getItem('userToken');

    return token;
  }

  getCurrentUser() {
    const token = this.getTokenFromLocalStorage();

    if(!token) {
      throw Error('No token found!');
    }

    const user = this.formatUser({token: token});

    return user;
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
