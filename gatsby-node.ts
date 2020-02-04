import { GatsbyNode } from 'gatsby';
import * as path from 'path';

const config: GatsbyNode = {
  async createPages({ actions, graphql, reporter }) {
    const postsResult = await graphql<PostsData>(postsQuery);

    if (postsResult.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query for posts`);
      return;
    }

    postsResult.data.md.group.map(({ language }) => {
      actions.createPage({
        path: path.join('/posts', language),
        component: path.resolve('src/templates/PostsTemplate.tsx'),
        context: { language },
      });
    });

    const postResult = await graphql<PostData>(postQuery);

    if (postResult.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query for each post`);
      return;
    }

    postResult.data.md.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.postPath,
        component: path.resolve('src/templates/PostTemplate.tsx'),
        context: { id: node.id },
      });
    });
  },

  async setFieldsOnGraphQLNodeType({ type }) {
    if (type.name === 'MarkdownRemark') {
      return {
        language: {
          type: 'String',
          resolve({ fileAbsolutePath }) {
            return getLanguage(fileAbsolutePath);
          },
        },
        postDirectory: {
          type: 'String',
          resolve({ fileAbsolutePath }) {
            return getPostDirectory(fileAbsolutePath);
          }
        },
        postPath: {
          type: 'String',
          resolve({ fileAbsolutePath }) {
            return getPostPath(fileAbsolutePath);
          }
        },
      };
    }
  },
};
export = config;

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

const getLanguage = (fileAbsolutePath: string) =>
  path.extname(path.basename(fileAbsolutePath, '.md')).substring(1);
const getPostDirectory = (fileAbsolutePath: string) =>
  path.basename(path.dirname(fileAbsolutePath));
const getPostPath = (fileAbsolutePath: string) =>
  path.posix.join('/post', getPostDirectory(fileAbsolutePath), getLanguage(fileAbsolutePath));
