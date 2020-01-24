import React from 'react';

import SEO from './SEO';
import StyleInstaller from './StyleInstaller';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <StyleInstaller />
      {children}
    </>
  );
}
