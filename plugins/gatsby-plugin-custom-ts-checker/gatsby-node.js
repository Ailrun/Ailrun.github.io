const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        formatter: 'codeframe',
      }),
    ],
  });
};
