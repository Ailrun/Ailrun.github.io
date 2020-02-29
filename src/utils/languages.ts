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

export function languageToBCP47(language: Language): string {
  switch (language) {
    case Language.EN:
      return 'en-US';
    case Language.KO:
      return 'ko-KR';
  }
}

export function locationToLanguage(location: typeof window['location']): Language {
  return (/\/([^/]*)/.exec(location.pathname) as RegExpExecArray)[1] as Language;
}
