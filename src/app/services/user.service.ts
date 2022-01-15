import { Injectable } from '@angular/core';
import { AuthResponse, CreatedUser } from '../models/credentials.model';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  formatUser(data: AuthResponse) {
    const decodedUser = this.getDecodedAccessToken(data.token);

    const user = new User(
      decodedUser.email,
      decodedUser.userId,
      decodedUser.exp
    );

    return user;
  }

  getDecodedAccessToken(token: string): CreatedUser {
    try {
      return jwt_decode(token);
    } catch (error: any) {
      throw error;
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

    if (!token) {
      throw Error('No token found!');
    }

    const user = this.formatUser({ token: token });

    return user;
  }
}
