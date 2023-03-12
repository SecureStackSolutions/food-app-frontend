import { inject, Injectable } from '@angular/core';
import {
   ActivatedRouteSnapshot,
   CanActivateFn,
   Router,
   RouterStateSnapshot,
   UrlTree,
} from '@angular/router';
import { Select } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { AuthenticationState } from './authentication.state';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService {
   @Select(AuthenticationState.userIsAuthenticated)
   userIsAuthenticated$!: Observable<boolean>;

   constructor(private readonly router: Router) {}

   canActivate: () => Observable<boolean | UrlTree> = () =>
      this.userIsAuthenticated$.pipe(
         map((userIsAuthenticated) =>
            userIsAuthenticated ? true : this.router.parseUrl('/authenticate')
         )
      );
}

export const authenticationGuard: CanActivateFn = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => inject(AuthenticationGuardService).canActivate();
