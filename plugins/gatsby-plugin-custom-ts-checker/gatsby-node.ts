import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type { CreateWebpackConfigArgs } from 'gatsby';

export const onCreateWebpackConfig = ({ actions, stage }: CreateWebpackConfigArgs): void => {
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
