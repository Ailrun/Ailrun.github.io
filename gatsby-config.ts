/// <reference lib='es2019.array' />
import type { GatsbyConfig } from 'gatsby';

const metadata = {
  name: `Valhalla of Valkyrie`,
  shortName: `VoV`,
  description: `Ailrun's Dev Blog`,
  themeColor: `#000000`,
  siteUrl: `https://Ailrun.github.io`,
};

const config: GatsbyConfig = {
  siteMetadata: {
    name: metadata.name,
    siteUrl: metadata.siteUrl,
    description: metadata.description,
    author: `Junyoung Clare Jang (Ailrun)`,
    locales: [
      `ko_KR`,
    ],
    themeColor: metadata.themeColor,
    titleTemplate: `%s - ${metadata.shortName}`,
  },
  /* eslint-disable @typescript-eslint/camelcase */
  plugins: [
    `gatsby-plugin-custom-eslint`,
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./post/`,
        name: `MarkdownPost`,
      },
    },
    ...(
      process.env.NODE_ENV === `development` ? [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `./post-draft/`,
            name: `MarkdownPost`,
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

    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: '*',
            disallow: '/iframe/',
          },
        ],
      },
    },
    /**
     * Add localization after language switch is enabled.
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metadata.name,
        short_name: metadata.shortName,
        description: metadata.description,
        start_url: `/ko/posts/index.html`,
        scope: `/ko/`,
        background_color: metadata.themeColor,
        theme_color: metadata.themeColor,
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
        ]
          .map((language) => [
            `/${language}/`,
            `/${language}/post/*`,
            `/${language}/posts`,
            `/${language}/projects`,
            `/${language}/about`,
          ])
          .flat()
          .concat([
            `/`,
          ]),
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
          'default-src': `'self' https://disqus.com https://*.disqus.com https://*.disquscdn.com https://www.google-analytics.com https://fonts.gstatic.com https://www.googletagmanager.com`,
          'font-src': `'self' https://c.disquscdn.com https://fonts.gstatic.com`,
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
