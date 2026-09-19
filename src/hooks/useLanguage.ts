import { usePageContext } from 'vike-react/usePageContext';

import { Language, locationToLanguage } from '../utils/languages';

const useLanguage = (): Language => {
  const pageContext = usePageContext();

  return locationToLanguage(pageContext.urlPathname);
};
export default useLanguage;
