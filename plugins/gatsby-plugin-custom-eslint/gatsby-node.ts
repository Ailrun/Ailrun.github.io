import ESLintPlugin from 'eslint-webpack-plugin';
import type { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions, stage }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ESLintPlugin({ emitError: true }),
    ],
  });
};
