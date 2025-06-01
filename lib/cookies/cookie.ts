// filepath: lib/cookies.ts
import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';
import { cookieConfig } from './config';

const cookies = new Cookies();

const AUTH_TOKEN_NAME = 'auth_token';

const defaultOptions: CookieSetOptions = {
  path: cookieConfig.path,
  sameSite: cookieConfig.sameSite,
  secure: cookieConfig.secure,
  maxAge: cookieConfig.maxAge,
};

export function setAuthCookie(token: string, options?: CookieSetOptions): void {
  cookies.set(AUTH_TOKEN_NAME, token, { ...defaultOptions, ...options });
}

export function getAuthCookie(): string | undefined {
  const token = cookies.get(AUTH_TOKEN_NAME);
  return typeof token === 'string' ? token : undefined;
}

export function removeAuthCookie(): void {
  cookies.remove(AUTH_TOKEN_NAME, { path: '/' });
}

export function hasAuthCookie(): boolean {
  return !!getAuthCookie();
}
