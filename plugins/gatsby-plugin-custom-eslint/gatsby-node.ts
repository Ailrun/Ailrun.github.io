import type { CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs): void => {
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
