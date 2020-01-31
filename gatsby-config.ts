import sass from 'sass';
import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Valhala of Valkyrie`,
    description: `Ailrun's Github Blog`,
    url: `https://Ailrun.github.io`,
    image: `https://raw.githubusercontent.com/Ailrun/media/master/blog-img/haskell.png`,
    author: `https://Ailrun.github.io/about`,
    locales: [
      `ko_KR`
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: sass,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.name + `Json`,
      },
    },

    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
export = config;
