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
import { AuthenticationState } from './authentication.state';

type CanActivate = () => Observable<boolean | UrlTree>;

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService {
   @Select(AuthenticationState.userIsAuthenticated)
   userIsAuthenticated$!: Observable<boolean>;

   constructor(private readonly router: Router) {}

   canActivate: CanActivate = () =>
      this.userIsAuthenticated$.pipe(
         map((userIsAuthenticated) =>
            userIsAuthenticated ? true : this.router.parseUrl('/authenticate')
         )
      );
}

export const authenticationRootGuard: CanActivateFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivate();

export const authenticationChildGuard: CanActivateChildFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivate();
