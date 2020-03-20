import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type { CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs): void => {
  if (process.env.NODE_ENV !== 'development') {
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
