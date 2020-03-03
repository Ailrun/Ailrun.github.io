import { PreRenderHTMLArgs } from 'gatsby';
import React, { ReactElement } from 'react';

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }: PreRenderHTMLArgs): void => {
  const newHeadComponents = getHeadComponents()
    .map((component) => {
      if ((component as ReactElement | undefined | null)?.type === 'link'
          && (component as ReactElement).props?.rel === 'preload'
          && !((component as ReactElement).props.href as string).startsWith('/')) {
        (component as ReactElement).props.crossOrigin = 'anonymous';
      }

      return component;
    })
    .concat([
      (
        <link
          rel='preconnect dns-prefetch'
          href='https://c.disquscdn.com'
          crossOrigin='anonymous'
          key='https://c.disquscdn.com'
        />
      ),
    ]);

  replaceHeadComponents(newHeadComponents);
};
export default onPreRenderHTML;
