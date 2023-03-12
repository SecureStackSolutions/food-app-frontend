import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

export const AUTHENTICATION_STATE_TOKEN = new StateToken<AuthenticationStateModel>(
   'authentication'
);

export type AuthToken = string;

export interface UserSession {
   authToken: AuthToken;
}

export interface AuthenticationStateModel {
   userSession: UserSession;
}

const emptySession: UserSession = {
   authToken: '',
};

export class SetAuthToken {
   static readonly type = '[Authentication] SetAuthToken';
   constructor(public authToken: AuthToken) {}
}

export class ClearUserSession {
   static readonly type = '[Authentication] ClearUserSession';
}

@State<AuthenticationStateModel>({
   name: AUTHENTICATION_STATE_TOKEN,
   defaults: {
      userSession: emptySession,
   },
})
@Injectable()
export class AuthenticationState {
   @Selector()
   static userIsAuthenticated(state: AuthenticationStateModel): boolean {
      return !!state.userSession.authToken;
   }

   @Action(SetAuthToken)
   setAuthToken(ctx: StateContext<AuthenticationStateModel>, { authToken }: SetAuthToken) {
      ctx.setState({
         ...ctx.getState(),
         userSession: {
            authToken,
         },
      });
   }

   @Action(ClearUserSession)
   clearUserSession(ctx: StateContext<AuthenticationStateModel>) {
      ctx.setState({
         ...ctx.getState(),
         userSession: emptySession,
      });
   }
}
