import type { WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from 'gatsby';
import React, { StrictMode } from 'react';

type WrapPageElementArgs = WrapPageElementBrowserArgs | WrapPageElementNodeArgs;

const wrapPageElement = ({ element }: WrapPageElementArgs): React.ReactChild => (
  <StrictMode>
    {element as React.ReactChild}
  </StrictMode>
);
export default wrapPageElement;
