exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$|\.tsx?$/,
          exclude: /node_modules|.cache|public|plugins/,
          use: [
            {
              loader: 'eslint-loader',
              options: {
                emitWarning: true,
              },
            },
          ],
        },
      ],
    },
  });
};
