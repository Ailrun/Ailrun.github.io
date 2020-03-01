/* eslint-disable import/no-nodejs-modules */
import * as fs from 'fs';
import * as path from 'path';
/* eslint-enable import/no-nodejs-modules */

import type { CreatePagesArgs, SetFieldsOnGraphQLNodeTypeArgs } from 'gatsby';

import { assert } from './src/utils/typeHelpers';

export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs): Promise<void> => {
  actions.createRedirect({
    fromPath: '/',
    toPath: '/en/posts/',
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });

  const postResult = await graphql<PostData>(postQuery);

  if (postResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for each post`);
    return;
  }

  assert(postResult.data);
  postResult.data.allMarkdownRemark.nodes.forEach(({ id, postPath }) => {
    actions.createPage({
      path: postPath,
      component: path.resolve('src/components/templates/PostTemplate.tsx'),
      context: { id },
    });
  });
};

export const setFieldsOnGraphQLNodeType = ({ type }: SetFieldsOnGraphQLNodeTypeArgs): object | void => {
  if (type.name !== 'MarkdownRemark') {
    return;
  }

  return {
    language: {
      type: 'String',
      resolve({ fileAbsolutePath }: MarkdownRemarkNodeMock): string {
        return getLanguage(fileAbsolutePath);
      },
    },
    postDirectory: {
      type: 'String',
      resolve({ fileAbsolutePath }: MarkdownRemarkNodeMock): string {
        return getPostDirectory(fileAbsolutePath);
      },
    },
    postPath: {
      type: 'String',
      resolve({ fileAbsolutePath }: MarkdownRemarkNodeMock): string {
        return getPostPath(fileAbsolutePath);
      },
    },
  };
};

interface MarkdownRemarkNodeMock {
  fileAbsolutePath: string;
}

interface PostData {
  readonly allMarkdownRemark: {
    readonly nodes: {
      readonly postPath: string;
      readonly id: string;
    }[];
  };
}
const postQuery = `
  query {
    allMarkdownRemark {
      nodes {
        postPath
        id
      }
    }
  }
`;

const getLanguage = (fileAbsolutePath: string): string =>
  path.extname(path.basename(fileAbsolutePath, '.md')).substring(1);
const getPostDirectory = (fileAbsolutePath: string): string =>
  path.basename(path.dirname(fileAbsolutePath));
const getPostPath = (fileAbsolutePath: string): string =>
  path.posix.join('/', getLanguage(fileAbsolutePath), 'post', getPostDirectory(fileAbsolutePath), '/');
