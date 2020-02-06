import { GatsbyNode } from 'gatsby';

const node: GatsbyNode = {
  async onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.jsx?$|\.tsx?$/,
            loader: 'eslint-loader',
            exclude: /node_modules|.cache|public|plugins/,
            options: {
              emitWarning: true,
            },
          },
        ],
      },
    });
  },
};
export = node;
