import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()

export class AccountVerificationGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: string = route.params["token"];

    return this.authService.confirmAccount(token).pipe(
     map(() => {
      return this.router.createUrlTree(["login"]);
     }),
      catchError((error: Error) => {
        this.router.navigate(["register"]);
       return throwError(error);
      })
    )
  }

}
