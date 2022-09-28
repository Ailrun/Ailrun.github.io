import { Global, css } from '@emotion/react';
import type { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby';
import React from 'react';

type WrapRootElementArgs = WrapRootElementBrowserArgs | WrapRootElementNodeArgs;

/**
   It's not possible to wrap the root with React strict mode
   because Gatsby uses legacy context in its ScrollContext.
   It will be fixed in Gatsby v3, so let's wait for it...
 */
const wrapRootElement = ({ element }: WrapRootElementArgs): React.ReactElement => (
  <>
    <Global styles={globalStyles} />
    {element}
  </>
);
export default wrapRootElement;

const globalStyles = css`
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR:400,700&display=block');

@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: local(Dancing Script Regular), local(DancingScript-Regular), local(Dancing Script), local(DancingScript), url(https://fonts.gstatic.com/s/dancingscript/v14/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: local(Dancing Script Bold), local(DancingScript-Bold), url(https://fonts.gstatic.com/s/dancingscript/v14/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

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
