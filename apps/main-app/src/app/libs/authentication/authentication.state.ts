import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';

export type AuthToken = string;

export interface AuthenticationStateModel {
   authToken: AuthToken;
}

export class SetAuthToken {
   static readonly type = '[Authentication] SetAuthToken';
   constructor(public authToken: AuthToken) {}
}

const AUTHENTICATION_STATE_TOKEN = new StateToken<AuthenticationStateModel>('authentication');

@State<AuthenticationStateModel>({
   name: AUTHENTICATION_STATE_TOKEN,
   defaults: {
      authToken: '',
   },
})
@Injectable()
export class AuthenticationState {
   @Action(SetAuthToken)
   setAuthToken(ctx: StateContext<AuthenticationStateModel>, { authToken }: SetAuthToken) {
      ctx.setState({
         ...ctx.getState(),
         authToken: authToken,
      });
   }
}
