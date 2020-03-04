/* eslint-disable import/no-nodejs-modules */
import * as path from 'path';
/* eslint-enable import/no-nodejs-modules */

import type {
  CreateNodeArgs,
  Node,
  NodeInput,
} from 'gatsby';

const createMarkdownPost = ({ actions, createNodeId, getNode, node }: CreateNodeArgs) => {
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
  const markdownPostNode: NodeInput & Record<string, any> = {
    id: createNodeId(`${node.id} >>> MarkdownPost`),
    parent: node.id,
    children: [],
    internal: {
      type: 'MarkdownPost',
      content: node.internal.content,
      contentDigest: node.internal.contentDigest,
    } as any,
  };

  const frontmatter = node.frontmatter as Record<string, any>;
  const fileAbsolutePath = node.fileAbsolutePath as string;

  markdownPostNode.title = frontmatter.title;
  markdownPostNode.date = frontmatter.date ?? fileNode.birthTime;

  markdownPostNode.language = getLanguage(fileAbsolutePath);
  markdownPostNode.postPath = getPostPath(fileAbsolutePath);

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
