import { PreRenderHTMLArgs } from 'gatsby';
import React from 'react';

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }: PreRenderHTMLArgs): void => {
  replaceHeadComponents([
    ...getHeadComponents(),
    (
      <link
        rel='preconnect dns-prefetch'
        href='https://c.disquscdn.com'
        crossOrigin='anonymous'
        key='https://c.disquscdn.com'
      />
    ),
  ]);
};
export default onPreRenderHTML;
