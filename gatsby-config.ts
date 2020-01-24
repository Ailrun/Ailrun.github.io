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
      resolve: `gatsby-plugin-purs`,
      options: {
        src: [
          `src/purescript/**/*.purs`,
        ],
        pscPackage: true,
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

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};

module.exports = config;
