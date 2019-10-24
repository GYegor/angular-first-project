import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedUser: string = localStorage.getItem('userName')
  public loggedPassword: string = '/////'

  constructor(private router: Router,) { }

  setToken(user?: string, password?: string): void {
    if (user && password && !this.hasToken()) {
      localStorage.setItem('accessToken', user + password);
      localStorage.setItem('userName', user);
    }
  }

  hasToken(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logOut(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

}
