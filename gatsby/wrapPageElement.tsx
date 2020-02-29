import { PageRendererProps, WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from 'gatsby';
import React from 'react';

import LanguageProvider from '../src/components/LanguageProvider';

type WrapPageElementArgs = WrapPageElementBrowserArgs | WrapPageElementNodeArgs;

const wrapPageElement = ({ element, props }: WrapPageElementArgs): React.ReactChild => (
  <LanguageProvider location={(props as PageRendererProps).location}>
    {element}
  </LanguageProvider>
);
export default wrapPageElement;
