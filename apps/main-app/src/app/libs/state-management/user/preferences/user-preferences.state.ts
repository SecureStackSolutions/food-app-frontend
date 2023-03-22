export type Language = 'nl' | 'en';
export type Theme = 'dark' | 'light';

export interface UserPreferences {
   language: Language;
   theme: Theme;
}

export const defaultPreferences: UserPreferences = {
   language: 'en',
   theme: 'light',
};

export class SetUserPreferences {
   static readonly type = '[User] SetUserPreferences';
   constructor(public preferences: UserPreferences) {}
}
