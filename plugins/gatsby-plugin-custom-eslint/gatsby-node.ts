import { CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs): void => {
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
};
