import { usePageContext } from 'vike-react/usePageContext';

import { Language, locationToLanguage } from '../utils/languages';

const useLanguage = (): Language => {
  const pageContext = usePageContext();
  const location = { pathname: pageContext.urlPathname };

  return locationToLanguage(location);
};
export default useLanguage;
