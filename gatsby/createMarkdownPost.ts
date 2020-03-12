/* eslint-disable import/no-nodejs-modules */
import * as path from 'path';
/* eslint-enable import/no-nodejs-modules */

import type {
  CreateNodeArgs,
  Node,
  NodeInput,
} from 'gatsby';

const createMarkdownPost = ({ actions, createNodeId, getNode, node }: CreateNodeArgs): void => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const parentNode: Node = getNode(node.parent);

  if (parentNode.internal.type !== 'File') {
    return;
  }

  if (parentNode.sourceInstanceName !== 'MarkdownPost') {
    return;
  }

  const fileNode = parentNode;
  const markdownPostNode: NodeInput & Record<string, unknown> = {
    id: createNodeId(`${node.id} >>> MarkdownPost`),
    parent: node.id,
    children: [],
    internal: {
      type: 'MarkdownPost',
      content: node.internal.content,
      contentDigest: node.internal.contentDigest,
    },
  };

  const frontmatter = node.frontmatter as Record<string, unknown>;
  const fileAbsolutePath = node.fileAbsolutePath as string;

  markdownPostNode.title = frontmatter.title;
  markdownPostNode.date = frontmatter.date ?? fileNode.birthTime;

  markdownPostNode.language = getLanguage(fileAbsolutePath);
  markdownPostNode.postPath = getPostPath(fileAbsolutePath);
  markdownPostNode.draft = false;

  if (fileAbsolutePath.includes('post-draft')) {
    markdownPostNode.postPath =
      path.join('/', process.env.GATSBY_DRAFT_PATH as string, markdownPostNode.postPath as string);
    markdownPostNode.draft = true;
  }

  actions.createNode(markdownPostNode);
  actions.createParentChildLink({
    parent: node,
    child: markdownPostNode as Node,
  });
};
export default createMarkdownPost;

const getLanguage = (fileAbsolutePath: string): string =>
  path.extname(path.basename(fileAbsolutePath, '.md')).substring(1);
const getPostDirectory = (fileAbsolutePath: string): string =>
  path.basename(path.dirname(fileAbsolutePath));
const getPostPath = (fileAbsolutePath: string): string =>
  path.posix.join('/', getLanguage(fileAbsolutePath), 'post', getPostDirectory(fileAbsolutePath), '/');
