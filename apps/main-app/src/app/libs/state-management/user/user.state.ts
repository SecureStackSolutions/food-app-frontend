import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { switchMap } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { Language } from '../../shared/types';
import { AppTheme, SetAppLanguage, SetAppTheme } from '../app';

import { SetUserProfile, UserProfile, UserProfileState } from './profile/user-profile.state';

export interface UserPreferences {
   language: {
      code: Language;
      name: string;
      icon: string;
   };
   theme: AppTheme;
}
export interface User {
   profile: UserProfile;
   preferences: UserPreferences;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserStateModel {}

export const USER_STATE_TOKEN = new StateToken<UserStateModel>('user');

export class SetUserDetails {
   static readonly type = '[User] SetUserSession';
   constructor(public user: User) {}
}

@State<UserState>({
   name: USER_STATE_TOKEN,
   children: [UserProfileState],
})
@Injectable()
export class UserState {
   constructor(private readonly userService: UserService) {}

   @Action(SetUserDetails)
   setUserDetails(ctx: StateContext<UserStateModel>, { user }: SetUserDetails) {
      const { profile, preferences } = user;
      const { language, theme } = preferences;
      return ctx.dispatch([
         new SetUserProfile(profile),
         new SetAppLanguage(language),
         new SetAppTheme(theme),
      ]);
   }
}
