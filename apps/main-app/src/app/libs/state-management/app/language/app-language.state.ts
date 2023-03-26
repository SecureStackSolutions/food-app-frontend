import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { lang } from 'moment';
import { Language, languageMap } from '../../../shared/types';

export const APP_LANGUAGE_STATE_TOKEN = new StateToken<AppLanguage>('language');

export interface AppLanguage {
   code: Language;
   name: string;
   icon: string;
}

export const defaultLanguage: AppLanguage = {
   code: Language.en,
   ...languageMap[Language.en],
};

export class SetAppLanguage {
   static readonly type = '[App] SetAppLanguage';
   constructor(public language: AppLanguage) {}
}

@State<AppLanguage>({
   name: APP_LANGUAGE_STATE_TOKEN,
   defaults: defaultLanguage,
})
@Injectable()
export class AppLanguageState {
   @Selector()
   static language(state: AppLanguage): AppLanguage {
      return state;
   }

   @Action(SetAppLanguage)
   setAppLanguage(ctx: StateContext<AppLanguage>, { language }: SetAppLanguage) {
      ctx.setState({
         ...ctx.getState(),
         ...language,
      });
   }
}
