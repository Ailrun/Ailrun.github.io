import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC<unknown> = () => {
  const data = useStaticQuery<Data>(query);

  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name='description' content={data.site.siteMetadata.description} />
      <meta name='url' content={data.site.siteMetadata.url} />
      <base href='./' />
      <link rel='author' href={data.site.siteMetadata.author} />
      <link rel='index' href={data.site.siteMetadata.url} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={data.site.siteMetadata.title} />
      <meta property='og:description' content={data.site.siteMetadata.description} />
      <meta property='og:url' content={data.site.siteMetadata.url} />
      <meta property='og:image' content={data.site.siteMetadata.image} />
      {
        data.site.siteMetadata.locales.map((locale: string, index: number) => {
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
      <meta property='og:site_name' content={data.site.siteMetadata.title} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={data.site.siteMetadata.title} />
      <meta name='twitter:description' content={data.site.siteMetadata.description} />
      <meta name='twitter:image' content={data.site.siteMetadata.image} />
    </Helmet>
  );
};
export default SEO;

interface Data {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
      readonly description: string;
      readonly url: string;
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
        title
        description
        url
        image
        author
        locales
      }
    }
  }
`;
