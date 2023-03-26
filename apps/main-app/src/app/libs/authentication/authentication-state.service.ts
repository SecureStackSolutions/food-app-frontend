import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { firstValueFrom, tap } from 'rxjs';
import { AuthenticationChanged, OnAuthenticationChange } from '../state-management/auth/auth.state';

@Injectable({ providedIn: 'root' })
export class AuthenticationStateService {
   // onAuthStateChangedSub;
   onAuthStateChanged$ = this.actions$.pipe(ofActionSuccessful(AuthenticationChanged));

   constructor(
      private readonly auth: AngularFireAuth,
      private readonly store: Store,
      private readonly router: Router,
      private readonly actions$: Actions
   ) {
      // this.onAuthStateChangedSub =
      this.onSessionChangeListener$().subscribe();
      this.auth.onAuthStateChanged((session) =>
         this.store.dispatch(new OnAuthenticationChange(session))
      );
   }

   init = async () => firstValueFrom(this.onAuthStateChanged$);

   onSessionChangeListener$ = () =>
      this.onAuthStateChanged$.pipe(
         tap((isAuthenticated) =>
            this.router.navigate([isAuthenticated ? '/app' : '/authenticate'])
         )
      );
}
