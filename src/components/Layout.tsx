import React from 'react';

import SEO from './SEO';
import StyleInstaller from './StyleInstaller';

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <>
      <SEO />
      <StyleInstaller />
      {children}
    </>
  );
};
export default Layout;
