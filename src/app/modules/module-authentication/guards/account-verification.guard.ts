import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { SignInService } from '../services/sign-in.service';

@Injectable()

export class AccountVerificationGuard implements CanActivateChild {
  constructor(private router: Router, private signInService: SignInService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: string = route.params["token"];



    return this.signInService.validateAccount(token).pipe(
      mergeMap((confirm: any) => {
        return of(true);
      }),
      catchError((error: Error) => {
        this.router.navigate(["register"]);
       return throwError(error);
      })
    )
  }

}
