export enum Language {
   en = 'en',
   nl = 'nl',
   de = 'de',
   fr = 'fr',
}

export const languageMap = {
   [Language.en]: {
      name: 'English',
      icon: 'assets/flag_en.svg',
   },
   [Language.nl]: {
      name: 'English',
      icon: 'assets/flag_nl.svg',
   },
   [Language.fr]: {
      name: 'English',
      icon: 'assets/flag_fr.svg',
   },
   [Language.de]: {
      name: 'English',
      icon: 'assets/flag_de.svg',
   },
};

export type Translations = {
   [key in Language]?: {
      [key: string]: string;
   };
};
