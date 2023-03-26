import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserService } from '../../services/user/user.service';
import { AppLanguageState, AppThemeState } from '../../state-management';
import { User } from '../../state-management/user/user.state';

export const userAccountResolver: ResolveFn<User> = (
   _route: ActivatedRouteSnapshot,
   _state: RouterStateSnapshot
) => {
   const store = inject(Store);
   const language = store.selectSnapshot(AppLanguageState.language);
   const theme = store.selectSnapshot(AppThemeState.theme);
   return inject(UserService).getUser(language.code, theme);
};
