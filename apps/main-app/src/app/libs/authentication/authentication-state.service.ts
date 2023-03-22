import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { concatMap, firstValueFrom, Observable, tap } from 'rxjs';

import {
   UpdateUserSession,
   UserSessionChanged,
   UserState,
} from '../state-management/user/user.state';

@Injectable({ providedIn: 'root' })
export class AuthenticationStateService {
   @Select(UserState.isAuthenticated) isAuthenticated$: Observable<boolean>;

   onAuthStateChangedSub;
   onSessionChanged$ = this.actions$.pipe(ofActionSuccessful(UserSessionChanged));

   constructor(
      private readonly auth: AngularFireAuth,
      private readonly store: Store,
      private readonly router: Router,
      private readonly actions$: Actions
   ) {
      this.onAuthStateChangedSub = this.auth.onAuthStateChanged(this.updateUserSession);
      this.setOnSessionChanged().subscribe();
   }

   init = async () => firstValueFrom(this.onSessionChanged$);
   updateUserSession = (session: any) => this.store.dispatch(new UpdateUserSession(session));

   setOnSessionChanged = () =>
      this.onSessionChanged$.pipe(
         concatMap(() => this.isAuthenticated$),
         tap((isAuthenticated) =>
            this.router.navigate([isAuthenticated ? '/app' : '/authenticate'])
         )
      );
}
