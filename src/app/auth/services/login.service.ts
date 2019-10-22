import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,) { }

  setToken(user?: string, password?: string): void {
    if (user && password) localStorage.setItem('accessToken', `${user}${password}`);
  }

  hasToken(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logOut(): void {
    localStorage.removeItem('accessToken');
  }

}
