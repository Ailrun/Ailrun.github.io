module.exports = {
  siteMetadata: {
    title: `Valhala of Valkyrie`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-purs`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/typescript/pages`,
      },
    }
  ],
};
