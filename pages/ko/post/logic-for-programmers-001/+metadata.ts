import { excerpt, frontmatter } from './Manuscript.mdx';

export default {
  ...frontmatter,
  excerpt: excerpt,
  draft: false,
};
