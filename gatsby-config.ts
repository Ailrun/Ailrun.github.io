import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Valhala of Valkyrie`,
    description: `Ailrun's Github Blog`,
    url: `https://Ailrun.github.io`,
    image: `https://raw.githubusercontent.com/Ailrun/media/master/blog-img/haskell.png`,
    author: `https://Ailrun.github.io/about`,
    locales: [
      `ko_KR`,
    ],
  },
  plugins: [
    `gatsby-plugin-custom-eslint`,
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./post/`,
        name: `postMD`,
      },
    },
    ...(
      process.env.NODE_ENV === `development` ? [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `./post-draft/`,
            name: `postMD`,
          },
        },
      ] : []
    ),

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeDefaultDirectives: false,
        mergeScriptHashes: process.env.NODE_ENV !== `development`,
        mergeStyleHashes: false,
        directives: {
          'default-src': `'self' https://disqus.com https://*.disqus.com https://*.disquscdn.com`,
          'font-src': `'self' https://fonts.gstatic.com`,
          'img-src': `'self' https:`,
          'script-src': `'self' https://disqus.com https://*.disqus.com/ https://*.disquscdn.com` +
            (
              process.env.NODE_ENV === `development` ?
                ` 'unsafe-eval' 'unsafe-inline'` :
                ``
            ),
          'style-src': `'self' https://fonts.googleapis.com blob: 'unsafe-inline'`,
        },
      },
    },
  ],
};
export default config;
