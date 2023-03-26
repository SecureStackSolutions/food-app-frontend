import { AppTheme } from '../../state-management';

export function convertWindowThemeToAppTheme(): AppTheme {
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
   return prefersDark.matches ? 'dark' : 'light';
}
