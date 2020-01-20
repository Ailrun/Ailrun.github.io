const resolvableExtensions = () => [".purs"];

function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.purs$/,
          loader: "purs-loader",
          exclude: /node_modules/,
          query: {
            src: [
              "src/purescript/**/*.purs"
            ],
            pscIde: true,
            pscPackage: true
          }
        }
      ]
    }
  });
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
