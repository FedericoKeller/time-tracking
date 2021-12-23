type doublePassword = 'register' | 'reset';

export type Credentials<T = undefined> = {
  email: string | null;
  password: string | null;
} & (T extends doublePassword ? {
  passwordConfirm: string | null;
}: {})
