import { WindowLocation } from '@reach/router';

export enum Language {
  EN = 'en',
  KO = 'ko',
}

export const languages: Language[] = [
  Language.EN,
  Language.KO,
];

export function languageToString(language: Language): string {
  switch (language) {
    case Language.EN:
      return 'English';
    case Language.KO:
      return 'Korean';
  }
}

export function locationToLanguage(location: WindowLocation): Language {
  return /\/([^/]*)/.exec(location.pathname)[1] as Language;
}
