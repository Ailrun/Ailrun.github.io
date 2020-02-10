import { PageRendererProps, navigate } from 'gatsby';
import React, { useEffect } from 'react';

import { locationToLanguage } from '../../languages';

const IndexPage: React.FC<PageRendererProps> = ({ location }) => {
  useEffect(() => {
    const language = locationToLanguage(location);

    navigate(`/${language}/posts/`, {
      replace: true,
    });
  }, [location]);

  return null;
};
export default IndexPage;
