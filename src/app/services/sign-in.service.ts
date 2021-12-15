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
resetPassword(email: any): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}auth/resetPassword`, email);
}

validateAccount(token: string) {
return this.httpClient.put(`${environment.apiUrl}auth/reset/${token}`, {});
}
}