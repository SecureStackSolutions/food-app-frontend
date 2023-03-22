import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Select, Store } from '@ngxs/store';
import {
   Language,
   SetUserPreferences,
   Theme,
   UserPreferences,
} from 'apps/main-app/src/app/libs/state-management/user/preferences/user-preferences.state';

import { UserState } from 'apps/main-app/src/app/libs/state-management/user/user.state';
import { Observable } from 'rxjs';

@Component({
   selector: 'feature-user-profile',
   templateUrl: 'user-profile.feature.html',
   styleUrls: ['user-profile.feature.scss'],
})
export class UserProfileFeature {
   @Select(UserState.getUserPreferences) preferences$: Observable<UserPreferences>;

   constructor(private readonly auth: AngularFireAuth, private readonly store: Store) {}

   onSignOut() {
      this.auth.signOut();
   }

   onUpdateLangauge(language: Language) {
      // this.store.dispatch(new SetUserPreferences({ language }));
   }

   onUpdateTheme(theme: Theme) {
      // this.store.dispatch(new SetUserPreferences({ theme }));
   }
}
