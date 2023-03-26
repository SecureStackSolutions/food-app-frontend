import { AppLanguageState, AppState, AppThemeState } from './app';
import { AuthState } from './auth';
import { UserProfileState, UserState } from './user';

export * from './user';
export * from './auth';
export * from './app';

export const stateRegister = [
   AppState,
   AppLanguageState,
   AppThemeState,
   AuthState,
   UserState,
   UserProfileState,
];
