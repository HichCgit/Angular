import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  logout(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem("access_token");
    localStorage.setItem("acces_token", token)
  }

  public getToken(): string | null {
    return localStorage.getItem("acces_token");
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};

  }
}
