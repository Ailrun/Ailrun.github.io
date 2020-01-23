module.exports = {
  siteMetadata: {
    title: `Valhala of Valkyrie`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-purs`,
      options: {
        src: [
          "src/purescript/**/*.purs",
        ],
        pscPackage: true,
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
