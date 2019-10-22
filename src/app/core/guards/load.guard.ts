import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
      this.router.navigate(['/login'], )
    return false;
  }
}
