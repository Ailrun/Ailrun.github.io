import React from 'react';

import SEO from './SEO';

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};
export default Layout;
