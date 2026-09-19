import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import rehypeExtractExcerpt from 'rehype-extract-excerpt';
import rehypeKatex from 'rehype-katex';
import remarkCustomHeadingId from 'remark-custom-heading-id';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { define } from 'unist-util-mdx-define';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vike(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkCustomHeadingId,
        remarkMath,
      ],
      rehypePlugins: [
        rehypeExtractExcerpt,
        () => (ast, file) => {
          if (typeof file.data.excerpt === 'string') {
            define(ast, file, {
              excerpt: {
                type: 'Literal',
                value: file.data.excerpt,
                start: 0,
                end: 0,
              },
            });
          }
        },
        rehypeKatex,
      ],
    }),
    react(),
  ],
});
