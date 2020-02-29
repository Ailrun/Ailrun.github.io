import { PageRendererProps, navigate } from 'gatsby';
import React, { useEffect } from 'react';

import { useLanguage } from '../LanguageProvider';

const IndexPage: React.FC<PageRendererProps> = () => {
  const language = useLanguage();

  useEffect(() => {
    navigate(`/${language}/posts/`, {
      replace: true,
    });
  }, [language]);

  return null;
};
export default IndexPage;
