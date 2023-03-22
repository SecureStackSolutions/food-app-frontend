import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { from, switchMap, tap, throwError } from 'rxjs';

@Injectable()
export class AuthenticationService {
   constructor(private readonly auth: AngularFireAuth, private readonly http: HttpClient) {}
   login = (provider: AuthProvider) =>
      from(this.auth.signInWithPopup(authProviderMap[provider])).pipe(
         switchMap(() => from(this.auth.currentUser)),
         switchMap((user) => (user ? from(user.getIdToken()) : throwError(() => new Error('ff'))))
      );
}

export enum AuthProvider {
   Facebook = 'Facebook',
   Google = 'Google',
}

export const authProviderMap = {
   [AuthProvider.Facebook]: new FacebookAuthProvider(),
   [AuthProvider.Google]: new GoogleAuthProvider(),
};
