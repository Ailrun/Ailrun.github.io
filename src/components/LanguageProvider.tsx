import { PageRendererProps } from 'gatsby';
import React, { useContext } from 'react';

import { Language, locationToLanguage } from '../utils/languages';

export const useLanguage = (): Language => {
  return useContext(Context);
};

const LanguageProvider: React.FC<PageRendererProps> = ({ children, location }) => {
  const language = locationToLanguage(location);

  return (
    <Context.Provider value={language}>
      {children}
    </Context.Provider>
  );
};
export default LanguageProvider;

const Context = React.createContext<Language>(Language.KO);
