import { AppTheme } from '../../state-management';

export function convertWindowThemeToAppTheme(): AppTheme {
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
   const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
   return prefersDark.matches ? 'dark' : 'light';
}
