/**
 * `export = ssr` or `module.exports = ssr` does not work with
 * gatsby-ssr API file. IDK why...
 */
import React from 'react';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const cspConfig = {
    default: [
      '\'self\'',
      'https://disqus.com',
      'https://*.disqus.com',
      'https://*.disquscdn.com',
    ],
    font: [
      '\'self\'',
      'https://fonts.gstatic.com',
    ],
    img: [
      '\'self\'',
      'https:',
    ],
    script: [
      '\'self\'',
      'https://disqus.com',
      'https://ailrungithubblog.disqus.com/',
      'https://*.disquscdn.com',
      process.env.NODE_ENV === "development" ?
        '\'unsafe-eval\'' :
        '\'unsafe-inline\'',
    ],
    style: [
      '\'self\'',
      'https://fonts.googleapis.com',
      'blob:',
      '\'unsafe-inline\'',
    ],
  };
  const cspComponent =
    React.createElement(
      'meta',
      {
        httpEquiv: 'Content-Security-Policy',
        content: toCSPString(cspConfig),
      },
    );
 replaceHeadComponents([cspComponent, ...getHeadComponents()]);
}

const toCSPString = (obj: Record<string, string[]>) => {
  return Object.entries(obj)
    .reduce((acc, [key, values]) => {
      return `${acc}; ${key}-src ${values.join(" ")}`;
    }, "");
};
