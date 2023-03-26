import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

export interface UserProfile {
   name: string;
   email: string;
   picture: string;
}

export const USER_PROFILE_STATE_TOKEN = new StateToken<UserProfile>('profile');

export const defaultProfile: UserProfile = {
   name: 'Undefined',
   email: '',
   picture: '',
};

export class SetUserProfile {
   static readonly type = '[User] SetUserProfile';
   constructor(public profile: UserProfile) {}
}

export class ClearUserProfile {
   static readonly type = '[User] ClearUserProfile';
}

@State<UserProfile>({
   name: USER_PROFILE_STATE_TOKEN,
   defaults: defaultProfile,
})
@Injectable()
export class UserProfileState {
   @Selector()
   static getUserProfile(state: UserProfile): UserProfile {
      return state;
   }

   @Action(SetUserProfile)
   setUserProfile(ctx: StateContext<UserProfile>, action: SetUserProfile) {
      ctx.setState({
         ...ctx.getState(),
         ...action,
      });
   }

   @Action(ClearUserProfile)
   clearUserProfile(ctx: StateContext<UserProfile>) {
      ctx.setState({
         ...ctx.getState(),
         ...defaultProfile,
      });
   }
}
