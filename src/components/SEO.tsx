import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { languageToBCP47 } from '../utils/languages';

import { useLanguage } from './LanguageProvider';

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
}
const SEO: React.FC<Props> = ({ title, description, pathname, image, imageAlt, og }) => {
  const { siteMetadata } = useStaticQuery<Data>(query).site;
  const language = useLanguage();

  return (
    <Helmet
      title={title}
      titleTemplate={siteMetadata.titleTemplate}
      defaultTitle={siteMetadata.name}
      base={{
        href: './',
      }}
    >
      {/* basic HTML tags */}
      <html lang={languageToBCP47(language)} />

      {/* standard meta tags */}
      <meta name='application-name' content={siteMetadata.name} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='description' content={description ?? siteMetadata.description} />
      <meta name='referrer' content='no-referrer-when-downgrade' />

      {/* standard link tags */}
      <link rel='author' href={`${siteMetadata.siteUrl}/${language}/about`} />
      <link rel='index' href={`${siteMetadata.siteUrl}/${language}`} />

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
    </Helmet>
  );
};
export default SEO;

interface Data {
  readonly site: {
    readonly siteMetadata: {
      readonly name: string;
      readonly siteUrl: string;
      readonly description: string;
      readonly author: string;
      readonly locales: string[];
      readonly themeColor: string;
      readonly titleTemplate: string;
    };
  };
}
const query = graphql`
  query {
    site {
      siteMetadata {
        name
        siteUrl
        description
        author
        locales
        themeColor
        titleTemplate
      }
    }
  }
`;
