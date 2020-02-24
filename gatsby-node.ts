/* eslint-disable import/no-nodejs-modules */
import * as fs from 'fs';
import * as path from 'path';
/* eslint-enable import/no-nodejs-modules */

import type { CreatePagesArgs, SetFieldsOnGraphQLNodeTypeArgs } from 'gatsby';

import { assert } from './src/util';

export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs): Promise<void> => {
  actions.createRedirect({
    fromPath: '/',
    toPath: '/en/posts/',
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });

  const pagePath = './src/pages/';
  const pageFileNames = await fs.promises.readdir(pagePath);
  const pageFileObjects =
    await Promise.all(pageFileNames.map(async (fileName) => {
      const filePath = path.join(pagePath, fileName);

      return {
        name: fileName,
        path: filePath,
        stat: await fs.promises.stat(filePath),
      };
    }));
  const languages =
    pageFileObjects
    .filter(({ stat }) => stat.isDirectory())
    .map(({ name }) => name);

  languages.map((language) => {
    actions.createPage({
      path: path.join('/', language, 'posts', '/'),
      component: path.resolve('src/templates/PostsTemplate.tsx'),
      context: { language },
    });
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
      component: path.resolve('src/templates/PostTemplate.tsx'),
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
