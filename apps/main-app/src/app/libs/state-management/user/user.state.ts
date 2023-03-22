import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { switchMap, tap } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import * as UserPreferences from './preferences/user-preferences.state';
import * as UserProfile from './profile/user-profile.state';

export type UserStateModel = User;

export interface User {
   preferences?: UserPreferences.UserPreferences;
   profile?: UserProfile.UserProfile;
}

export const USER_STATE_TOKEN = new StateToken<UserStateModel>('user');

export class SetUserSession {
   static readonly type = '[User] SetUserSession';
   constructor(public user: User) {}
}

export class ClearUserSession {
   static readonly type = '[User] ClearUserSession';
}

export class UpdateUserSession {
   static readonly type = '[User] UpdateUserSession';
   constructor(public session: firebase.default.User | null) {}
}

export class UserSessionChanged {
   static readonly type = '[User] UserSessionChanged';
}

@State<UserState>({
   name: USER_STATE_TOKEN,
})
@Injectable()
export class UserState {
   constructor(private readonly userService: UserService) {}

   @Selector()
   static isAuthenticated(state: UserStateModel): boolean {
      return Object.keys(state).length !== 0;
   }

   @Selector()
   static getUserProfile(state: UserStateModel): UserProfile.UserProfile | undefined {
      return state?.profile;
   }

   @Selector()
   static getUserPreferences(state: UserStateModel): UserPreferences.UserPreferences | undefined {
      return state?.preferences;
   }

   @Action(UserPreferences.SetUserPreferences)
   setUserPreferences(
      ctx: StateContext<UserStateModel>,
      action: UserPreferences.SetUserPreferences
   ) {
      ctx.setState({
         ...ctx.getState(),
         ...action,
      });
   }

   @Action(UserProfile.SetUserProfile)
   setUserProfile(ctx: StateContext<UserStateModel>, action: UserProfile.SetUserProfile) {
      ctx.setState({
         ...ctx.getState(),
         ...action,
      });
   }

   @Action(UpdateUserSession)
   updateUserSession(ctx: StateContext<UserStateModel>, { session }: UpdateUserSession) {
      if (session) {
         return this.userService
            .getUser()
            .pipe(switchMap((user) => ctx.dispatch(new SetUserSession(user))));
      }
      return ctx.dispatch(new ClearUserSession());
   }

   @Action(SetUserSession)
   setUser(ctx: StateContext<UserStateModel>, action: SetUserSession) {
      ctx.setState({
         ...ctx.getState(),
         ...action.user,
      });
      return ctx.dispatch(new UserSessionChanged());
   }

   @Action(ClearUserSession)
   clearUser(ctx: StateContext<UserStateModel>) {
      ctx.setState(() => ({}));
      return ctx.dispatch(new UserSessionChanged());
   }
}
