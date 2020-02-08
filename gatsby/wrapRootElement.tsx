import { Global, css } from '@emotion/core';
import { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby';
import React from 'react';

type WrapRootElementArgs = WrapRootElementBrowserArgs & WrapRootElementNodeArgs;

const wrapRootElement = ({ element }: WrapRootElementArgs): React.ReactChild => (
  <>
    <Global styles={globalStyles} />
    {element}
  </>
);
export default wrapRootElement;

const globalStyles = css`
@import url('https://fonts.googleapis.com/css?family=Dancing+Script:400,700|Noto+Serif+KR:400,700&display=block&subset=korean');

* {
  margin: 0;

  box-sizing: border-box;

  padding: 0;
}

html {
  width: 100vw;
  min-height: 100vh;

  font-family: Noto Serif KR, serif;
}

body {
  margin: 0;

  width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
