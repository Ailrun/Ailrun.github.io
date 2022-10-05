import { useLocation } from '@gatsbyjs/reach-router';
import { graphql } from 'gatsby';
import React from 'react';

import useLanguage from '../hooks/useLanguage';

export interface Props {
  readonly title?: string;
  readonly description?: string;
  readonly pathname?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly og?: {
    readonly type?: string;
    readonly additional?: Record<string, string>;
  };
  readonly data: Queries.SEOInformationFragment;
}
const SEO: React.FC<Props> = ({ title, description, pathname, image, imageAlt, og, data }) => {
  const { siteMetadata } = data.site!;
  const language = useLanguage();
  const location = useLocation();

  return (
    <>
      <title>{`${title} - ${siteMetadata.shortName}`}</title>
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
      <base href={location.href?.replace(/#.*$/, '')} />
      {/* standard meta tags */}
      <meta name='application-name' content={siteMetadata.name} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='description' content={description ?? siteMetadata.description} />
      <meta name='referrer' content='no-referrer-when-downgrade' />

      {/* standard link tags */}
      <link rel='author' href={`${siteMetadata.siteUrl}/${language}/about`} />
      <link rel='index' href={`${siteMetadata.siteUrl}/${language}`} />

      {/* robot restriction tags */}
	  <meta name="robots" content="index" />
	  <meta name="googlebot" content="index" />

      {/* Do not translate this page by default */}
	  <meta name="google" content="notranslate" />

      {/* Default URL */}
	  <meta name="url" content="https://ailrun.github.io/" />

      {/* Targets? */}
      <meta name="coverage" content="WorldWide"/>

      {/* Android tags */}
      <meta name='mobile-web-app-capable' content='yes' />

      {/* opengraph tags */}
      <meta property='og:title' content={title ?? siteMetadata.name} />
      <meta property='og:description' content={description ?? siteMetadata.description} />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${pathname ?? ''}`} />
      {
        image !== undefined ? (
          <meta name='og:image' content={image} />
        ) : null
      }
      {
        imageAlt !== undefined ? (
          <meta property='og:image:alt' content={imageAlt} />
        ) : null
      }
      {
        siteMetadata.locales.map((locale: string, index: number) => {
          if (index === 0) {
            return (
              <meta key={'locale' + locale} property='og:locale' content={locale} />
            );
          } else {
            return (
              <meta key={'locale' + locale} property='og:locale:alternate' content={locale} />
            );
          }
        })
      }
      <meta property='og:site_name' content={siteMetadata.name} />
      <meta property='og:type' content={og?.type ?? 'website'} />
      {
        Object.entries(og?.additional ?? {}).map(([key, value]) => {
          return (
            <meta key={key} property={`og:${og?.type ?? ''}:${key}`} content={value} />
          );
        })
      }

      {/* twitter tags */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title ?? siteMetadata.name} />
      <meta name='twitter:description' content={description ?? siteMetadata.description} />
      {
        image !== undefined ? (
          <meta name='twitter:image' content={image} />
        ) : null
      }
      {
        imageAlt !== undefined ? (
          <meta property='twitter:image:alt' content={imageAlt} />
        ) : null
      }
    </>
  );
};
SEO.defaultProps = {
  title: undefined,
  description: undefined,
  pathname: undefined,
  image: undefined,
  imageAlt: undefined,
  og: undefined,
};
export default SEO;

export const query = graphql`
  fragment SEOInformation on Query {
    site {
      siteMetadata {
        name
        shortName
        siteUrl
        description
        author
        locales
        themeColor
      }
    }
  }
`;
