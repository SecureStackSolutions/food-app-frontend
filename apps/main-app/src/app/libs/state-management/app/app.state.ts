import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { AppLanguageState } from './language/app-language.state';
import { AppThemeState } from './theme/app-theme.state';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppStateModel {}

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

@State<AppStateModel>({
   name: APP_STATE_TOKEN,
   children: [AppLanguageState, AppThemeState],
})
@Injectable()
export class AppState {}
