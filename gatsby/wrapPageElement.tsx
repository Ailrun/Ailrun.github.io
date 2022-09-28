import type { WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from 'gatsby';
import React, { StrictMode } from 'react';

type WrapPageElementArgs = WrapPageElementBrowserArgs | WrapPageElementNodeArgs;

const wrapPageElement = ({ element }: WrapPageElementArgs): React.ReactElement => (
  <StrictMode>
    {element}
  </StrictMode>
);
export default wrapPageElement;
