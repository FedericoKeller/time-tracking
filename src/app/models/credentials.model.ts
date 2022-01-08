type doublePassword = 'register' | 'reset';

export type Credentials<T = undefined> = {
  email: string | null;
  password: string | null;
} & (T extends doublePassword ? {
  passwordConfirm: string | null;
}: {})



export interface AuthResponse {
  token: string;
}

export interface UserInfo {
  email: string;
  userId: string;
}

export interface JWTPayload {
  iat: number;
  exp: number;
}

export type CreatedUser = UserInfo & JWTPayload;
