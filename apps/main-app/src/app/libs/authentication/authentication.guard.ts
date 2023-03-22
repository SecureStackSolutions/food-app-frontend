import { inject, Injectable } from '@angular/core';
import {
   ActivatedRouteSnapshot,
   CanActivateChildFn,
   CanActivateFn,
   Router,
   RouterStateSnapshot,
   UrlTree,
} from '@angular/router';
import { Select } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { UserState } from '../state-management/user/user.state';

type CanActivate = () => Observable<boolean | UrlTree>;

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService {
   @Select(UserState.isAuthenticated) isAuthenticated$: Observable<boolean>;

   constructor(private readonly router: Router) {}

   canActivateApp: CanActivate = () =>
      this.isAuthenticated$.pipe(
         map((isAuthenticated) => isAuthenticated || this.router.parseUrl('/authenticate'))
      );

   canActivateAuthPage: CanActivate = () =>
      this.isAuthenticated$.pipe(
         map((isAuthenticated) => !isAuthenticated || this.router.parseUrl('/app'))
      );
}

export const AuthPageGuard: CanActivateFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivateAuthPage();

export const AppChildGuard: CanActivateChildFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivateApp();

export const AppRootGuard: CanActivateFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivateApp();
