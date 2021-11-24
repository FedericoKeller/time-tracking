import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppStore } from '../modules/module-authentication/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppStore>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('login').pipe(
      map(data => {
        console.log(data)
        if(data.email && data.password) {
          return true;
        }

        this.router.navigate(['/login'])
        return false;
      }),
      catchError((error) => {
        this.router.navigate(['/login'])
        return throwError(error);
      })
    )
  }

}
