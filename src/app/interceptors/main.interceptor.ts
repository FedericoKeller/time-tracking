import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { SnackBarService } from "../services/snackbar.service";

@Injectable()

export class MainInterceptor implements HttpInterceptor {

   constructor(private snackbarService: SnackBarService) {

   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const httpReq = req.clone({
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })

    return next.handle(httpReq).pipe(
      // retry(2),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }


  handleError(error: HttpErrorResponse) {
    this.snackbarService.open(error.message, "Aceptar", 5000, "error-snackbar");
    return throwError(error);
  }

}
