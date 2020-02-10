/* eslint-disable-next-line import/no-nodejs-modules */
import * as path from 'path';

import { CreatePagesArgs, SetFieldsOnGraphQLNodeTypeArgs } from 'gatsby';

import { assert } from './src/util';

export const createPages = async ({ actions, graphql, reporter }: CreatePagesArgs): Promise<void> => {
  actions.createRedirect({
    fromPath: '/',
    toPath: '/en',
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });

  const postsResult = await graphql<PostsData>(postsQuery);

  if (postsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for posts`);
    return;
  }

  assert(postsResult.data);
  postsResult.data.md.group.map(({ language }) => {
    actions.createPage({
      path: path.join('/', language, 'posts'),
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
  postResult.data.md.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.postPath,
      component: path.resolve('src/templates/PostTemplate.tsx'),
      context: { id: node.id },
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
      }
    },
    postPath: {
      type: 'String',
      resolve({ fileAbsolutePath }: MarkdownRemarkNodeMock): string {
        return getPostPath(fileAbsolutePath);
      }
    },
  };
};

interface MarkdownRemarkNodeMock {
  fileAbsolutePath: string;
}

interface PostsData {
  readonly md: {
    readonly group: {
      readonly language: string;
    }[];
  };
}
const postsQuery = `
  query {
    md: allMarkdownRemark {
      group(field: language) {
        language: fieldValue
      }
    }
  }
`;

interface PostData {
  readonly md: {
    readonly edges: {
      readonly node: {
        readonly postPath: string;
        readonly id: string;
      };
    }[];
  };
}
const postQuery = `
  query {
    md: allMarkdownRemark {
      edges {
        node {
          postPath
          id
        }
      }
    }
  }
`;

const getLanguage = (fileAbsolutePath: string): string =>
  path.extname(path.basename(fileAbsolutePath, '.md')).substring(1);
const getPostDirectory = (fileAbsolutePath: string): string =>
  path.basename(path.dirname(fileAbsolutePath));
const getPostPath = (fileAbsolutePath: string): string =>
  path.posix.join('/', getLanguage(fileAbsolutePath), 'post', getPostDirectory(fileAbsolutePath));
