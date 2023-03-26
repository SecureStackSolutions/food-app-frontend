export enum LanguageCode {
   nl = 'nl',
   en = 'en',
   gr = 'gr',
   fr = 'fr',
}

export enum Language {
   enlish = 'Enligh',
   dutch = 'Dutch',
   french = 'French',
   german = 'German',
}

export const languageCodeMap = new Map<LanguageCode, Language>([
   [LanguageCode.en, Language.enlish],
   [LanguageCode.nl, Language.dutch],
   [LanguageCode.fr, Language.french],
   [LanguageCode.gr, Language.german],
]);
