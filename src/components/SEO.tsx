import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Language, languageToBCP47 } from '../utils/languages';

interface Props {
  readonly language: Language;
}
const SEO: React.FC<Props> = ({ language }) => {
  const { siteMetadata } = useStaticQuery<Data>(query).site;

  return (
    <Helmet>
      <html lang={languageToBCP47(language)} />
      <title>{siteMetadata.title}</title>
      <meta name='description' content={siteMetadata.description} />
      <meta name='url' content={siteMetadata.siteUrl} />
      <base href='./' />
      <link rel='author' href={siteMetadata.author} />
      <link rel='index' href={siteMetadata.siteUrl} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={siteMetadata.title} />
      <meta property='og:description' content={siteMetadata.description} />
      <meta property='og:url' content={siteMetadata.siteUrl} />
      <meta property='og:image' content={siteMetadata.image} />
      {
        siteMetadata.locales.map((locale: string, index: number) => {
          if (index === 0) {
            return (
              <meta key={'locale' + index} property='og:locale' content={locale} />
            );
          } else {
            return (
              <meta key={'locale' + index} property='og:locale:alternate' content={locale} />
            );
          }
        })
      }
      <meta property='og:site_name' content={siteMetadata.title} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={siteMetadata.title} />
      <meta name='twitter:description' content={siteMetadata.description} />
      <meta name='twitter:image' content={siteMetadata.image} />
    </Helmet>
  );
};
export default SEO;

interface Data {
  readonly site: {
    readonly siteMetadata: {
      readonly siteUrl: string;
      readonly title: string;
      readonly description: string;
      readonly image: string;
      readonly author: string;
      readonly locales: string[];
    };
  };
}
const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        image
        author
        locales
      }
    }
  }
`;
