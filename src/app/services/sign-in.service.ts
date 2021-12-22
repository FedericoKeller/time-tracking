import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class SignInService {

constructor(private httpClient: HttpClient) { }


login(email: any): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}auth/login`, email);
}

register(data: any): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}auth/register`, data);
}
sendResetPasswordEmail(email: any): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}auth/sendResetPasswordEmail`, email);
}

resetPassword(data: any) {
  return this.httpClient.post(`${environment.apiUrl}auth/resetPassword`, data);
}

getAccessToResetPassword(token: string) {
  return this.httpClient.get(`${environment.apiUrl}auth/reset/${token}`);
}

confirmAccount(token: string): Observable<any> {
return this.httpClient.put(`${environment.apiUrl}auth/confirmation/${token}`, {});
}
}
