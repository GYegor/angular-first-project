import { LoginService } from './../../auth/services/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  constructor(private router: Router, private loginService: LoginService) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.hasToken()) {
      return true;
    };
    this.router.navigate(['/login'])
    return false;
  }
}
