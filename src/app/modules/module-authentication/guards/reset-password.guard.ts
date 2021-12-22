import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SignInService } from 'src/app/services/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate {
  constructor(private signInService: SignInService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token: string = route.params["token"];

      return this.signInService.getAccessToResetPassword(token).pipe(
        map((data: any) => {
          route.data = data;
         return true;
        }),
         catchError((error: Error) => {
           this.router.navigate(["login"]);
          return throwError(error);
         })
       )
  }

}
