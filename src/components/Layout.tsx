import React from 'react';

import { Language } from '../utils/languages';

import SEO from './SEO';

interface Props {
  readonly language: Language;
}
const Layout: React.FC<Props> = ({ language, children }) => (
  <>
    <SEO language={language} />
    {children}
  </>
);
export default Layout;
