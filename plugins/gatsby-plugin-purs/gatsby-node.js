const resolvableExtensions = () => [".purs"];

function onCreateWebpackConfig({ actions }, pluginOptions) {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.purs$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "purs-loader",
              options: pluginOptions,
            }
          ],
        }
      ]
    }
  });
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
