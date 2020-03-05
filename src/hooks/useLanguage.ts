import { useLocation } from '@reach/router';

import { Language, locationToLanguage } from '../utils/languages';

export {
  Language,
};

const useLanguage = (): Language => {
  const location = useLocation();

  return locationToLanguage(location);
};
export default useLanguage;
