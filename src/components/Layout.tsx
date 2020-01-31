import React from 'react';

import SEO from './SEO';

const Layout: React.FC<unknown> = ({ children }) => (
  <>
    <SEO />
    {children}
  </>
);
export default Layout;
