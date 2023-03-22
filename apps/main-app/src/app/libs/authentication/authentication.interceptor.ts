import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { filter, from, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
   constructor(private readonly auth: AngularFireAuth) {}

   intercept = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> =>
      from(this.auth.currentUser).pipe(
         filter(() => !req.url.startsWith('/api')),
         switchMap((user) => (user ? from(user.getIdToken()) : throwError(() => new Error('ff')))),
         map((idToken) =>
            req.clone({
               headers: req.headers.set('id-token', idToken),
            })
         ),
         switchMap((newRequest) => next.handle(newRequest))
      );
}
