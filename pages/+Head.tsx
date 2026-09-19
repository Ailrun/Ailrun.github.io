import { Global, css } from '@emotion/react';

export default function Head() {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta
        http-equiv='Content-Security-Policy'
        content="default-src 'self' https://disqus.com https://*.disqus.com https://*.disquscdn.com https://www.google-analytics.com https://fonts.gstatic.com https://www.googletagmanager.com https://stats.g.doubleclick.net; font-src 'self' https://c.disquscdn.com https://fonts.gstatic.com; img-src 'self' https:; script-src 'self' https://disqus.com https://*.disqus.com/ https://*.disquscdn.com https://www.google-analytics.com https://www.googletagmanager.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com https://disqus.com https://*.disqus.com https://*.disquscdn.com blob: 'unsafe-inline';"
      />
      <link
        rel='preconnect dns-prefetch'
        href='https://www.googletagmanager.com'
        crossOrigin='anonymous'
        key='https://www.googletagmanager.com'
      />
      <link
        rel='preconnect dns-prefetch'
        href='https://c.disquscdn.com'
        crossOrigin='anonymous'
        key='https://c.disquscdn.com'
      />
      <Global styles={globalStyles} />
    </>
  )
};

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
