/* eslint-disable import/no-nodejs-modules */
import * as path from 'path';
/* eslint-enable import/no-nodejs-modules */

import dotenv from 'dotenv';
import type {
  CreateNodeArgs,
  CreatePagesArgs,
} from 'gatsby';

import createMarkdownPost from './gatsby/createMarkdownPost';
import { assert } from './src/utils/typeHelpers';

dotenv.config({
  path: `.env.${process.env.NODE_ENV as string}`,
});

export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs): Promise<void> => {
  const postResult = await graphql<PostData>(postQuery);

  if (postResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for each post`);
    return;
  }

  assert(postResult.data);
  postResult.data.allMarkdownPost.nodes.forEach(({ id, postPath }) => {
    actions.createPage({
      path: postPath,
      component: path.resolve('src/components/templates/PostTemplate.tsx'),
      context: { id },
    });
  });
};

export const onCreateNode = (createNodeArgs: CreateNodeArgs): void => {
  createMarkdownPost(createNodeArgs);
};

interface PostData {
  readonly allMarkdownPost: {
    readonly nodes: {
      readonly postPath: string;
      readonly id: string;
    }[];
  };
}
const postQuery = `
  query {
    allMarkdownPost {
      nodes {
        postPath
        id
      }
    }
  }
`;
