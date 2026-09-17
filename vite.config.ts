import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import rehypeKatex from 'rehype-katex';
import remarkCustomHeadingId from 'remark-custom-heading-id';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vike(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkCustomHeadingId,
        remarkMath,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
    react(),
  ],
});
