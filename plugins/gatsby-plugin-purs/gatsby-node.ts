import { GatsbyNode } from 'gatsby';

const resolvableExtensions: GatsbyNode['resolvableExtensions'] = () => ['.purs'];

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }, pluginOptions) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.purs$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'purs-loader',
              options: pluginOptions,
            }
          ],
        }
      ]
    },
    plugins: [
      function () {
        this.hooks.done.tap('PursLoaderErrorPlugin', (stats: any) => {
          process.stderr.write(stats.toString('errors-warnings'));
        });
      },
    ],
  });
}

const node: GatsbyNode = {
  resolvableExtensions,
  onCreateWebpackConfig,
};
export = node;
