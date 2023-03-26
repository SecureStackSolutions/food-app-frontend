import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

export const APP_THEME_STATE_TOKEN = new StateToken<AppTheme>('theme');

export type AppTheme = 'light' | 'dark';

interface AppThemeModel {
   code: AppTheme;
}

export const defaultTheme: AppThemeModel = {
   code: 'light',
};

export class SetAppTheme {
   static readonly type = '[App] SetAppTheme';
   constructor(public theme: AppTheme) {}
}

@State<AppThemeModel>({
   name: APP_THEME_STATE_TOKEN,
   defaults: defaultTheme,
})
@Injectable()
export class AppThemeState {
   @Selector()
   static theme(state: AppThemeModel): AppTheme {
      return state.code;
   }

   @Action(SetAppTheme)
   setAppTheme(ctx: StateContext<AppThemeModel>, { theme }: SetAppTheme) {
      ctx.setState({
         ...ctx.getState(),
         code: theme,
      });
   }
}
