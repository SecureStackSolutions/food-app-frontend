import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

export interface AuthStateModel {
   isAuthenticated: boolean;
}

export const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');

export class OnAuthenticationChange {
   static readonly type = '[Auth] OnAuthenticationChange';
   constructor(public session: firebase.default.User | null) {}
}

export class SetAuthentication {
   static readonly type = '[Auth] SetAuthentication';
}

export class ClearAuthentication {
   static readonly type = '[Auth] ClearAuthentication';
}

export class AuthenticationChanged {
   static readonly type = '[Auth] AuthenticationChanged';
   constructor(public isAuthenticated: boolean) {}
}

@State<AuthStateModel>({
   name: AUTH_STATE_TOKEN,
   defaults: {
      isAuthenticated: false,
   },
})
@Injectable()
export class AuthState {
   @Selector()
   static isAuthenticated(state: AuthStateModel): boolean {
      return state.isAuthenticated;
   }

   @Action(OnAuthenticationChange)
   onAuthenticationChange(ctx: StateContext<AuthStateModel>, { session }: OnAuthenticationChange) {
      return session
         ? ctx.dispatch(new SetAuthentication())
         : ctx.dispatch(new ClearAuthentication());
   }

   @Action(SetAuthentication)
   setAuthentication(ctx: StateContext<AuthStateModel>) {
      ctx.setState({
         ...ctx.getState(),
         isAuthenticated: true,
      });
      return ctx.dispatch([new AuthenticationChanged(true)]);
   }

   @Action(ClearAuthentication)
   clearAuthentication(ctx: StateContext<AuthStateModel>) {
      ctx.setState({
         ...ctx.getState(),
         isAuthenticated: false,
      });
      return ctx.dispatch(new AuthenticationChanged(false));
   }
}
