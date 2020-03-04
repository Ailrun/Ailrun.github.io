import { PreRenderHTMLArgs } from 'gatsby';
import React from 'react';

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }: PreRenderHTMLArgs): void => {
  const headComponents = getHeadComponents()
    .map((component) => {
      if ((component as any)?.type === 'meta'
          && (component as any).props.httpEquiv === 'Content-Security-Policy') {
        return React.cloneElement(component as any, {
          key: 'gatsby-plugin-csp',
        });
      }

      return component;
    });

  replaceHeadComponents([
    ...headComponents,
    (
      <link
        rel='preconnect dns-prefetch'
        href='https://www.googletagmanager.com'
        crossOrigin='anonymous'
        key='https://www.googletagmanager.com'
      />
    ),
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
