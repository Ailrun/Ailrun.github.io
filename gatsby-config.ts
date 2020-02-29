/// <reference lib='es2019.array' />
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://Ailrun.github.io`,
    title: `Valhalla of Valkyrie`,
    description: `Ailrun's GitHub Blog`,
    image: `https://raw.githubusercontent.com/Ailrun/media/master/blog-img/haskell.png`,
    author: `https://Ailrun.github.io/about`,
    locales: [
      `ko_KR`,
    ],
  },
  /* eslint-disable @typescript-eslint/camelcase */
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
    `gatsby-plugin-sitemap`,
    /**
     * Add localization after language switch is enabled.
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Valhalla of Valkyrie`,
        short_name: `VoV`,
        description: `Ailrun's GitHub Blog`,
        start_url: `/ko/posts/index.html`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        crossorigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `ko`,
          `en`,
        ].map((language) => [
          `/${language}/post/*`,
          `/${language}/posts`,
          `/${language}/projects`,
          `/${language}/about`,
        ]).flat(),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-159365767-1`,
        ],
        pluginConfig: {
          head: true,
          exclude: [
            `/iframe/**`,
          ],
        },
      },
    },
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
          'script-src': `'self' https://disqus.com https://*.disqus.com/ https://*.disquscdn.com https://www.google-analytics.com https://www.googletagmanager.com` +
            (
              process.env.NODE_ENV === `development` ?
                ` 'unsafe-eval' 'unsafe-inline'` :
                ``
            ),
          'style-src': `'self' https://fonts.googleapis.com https://disqus.com https://*.disqus.com https://*.disquscdn.com blob: 'unsafe-inline'`,
        },
      },
    },
  ],
  /* eslint-enable @typescript-eslint/camelcase */
};
export default config;
