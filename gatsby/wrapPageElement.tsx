import { WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from 'gatsby';
import React from 'react';

type WrapPageElementArgs = WrapPageElementBrowserArgs | WrapPageElementNodeArgs;

const wrapPageElement = ({ element }: WrapPageElementArgs): React.ReactChild => (
  element as React.ReactChild
);
export default wrapPageElement;