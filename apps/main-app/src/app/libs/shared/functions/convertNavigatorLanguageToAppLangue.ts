import { Language, languageMap } from '../types';

export function convertNavigotorLanguageToAppLanguage(navigatorLang: string): {
   code: Language;
   icon: string;
   name: string;
} {
   const navigatorLanguageCode = navigatorLang.slice(0, 2);
   for (const appLanguageCode in Language) {
      if (appLanguageCode === navigatorLanguageCode) {
         const code = appLanguageCode as Language;
         return { code, ...languageMap[code] };
      }
   }
   return { code: Language.en, ...languageMap[Language.en] };
}
