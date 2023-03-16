import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { from, switchMap, throwError } from 'rxjs';

@Injectable()
export class AuthenticationService {
   constructor(private readonly auth: AngularFireAuth, private readonly http: HttpClient) {}
   login = (provider: AuthProvider) =>
      from(this.auth.signInWithPopup(authProviderMap[provider])).pipe(
         switchMap(({ credential, additionalUserInfo }) =>
            credential && additionalUserInfo
               ? this.getSession(credential, additionalUserInfo.profile)
               : throwError(() => new Error('Something went wrong'))
         )
      );

   getSession = (credential: unknown, profile: unknown) =>
      this.http.post('/api/auth', {
         credential,
         profile,
      });
}

export enum AuthProvider {
   Facebook = 'Facebook',
   Google = 'Google',
}

export const authProviderMap = {
   [AuthProvider.Facebook]: new FacebookAuthProvider(),
   [AuthProvider.Google]: new GoogleAuthProvider(),
};
