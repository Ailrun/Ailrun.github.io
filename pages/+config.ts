import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

import type { PostInfo } from '../src/components/PostList';

export default {
  extends: vikeReact,
  meta: {
    frontmatter: {
      eager: true,
      env: {
        server: true,
        client: true,
      },
    },
  },
  prerender: true,
  redirects: {
    '/': '/en/',
    '/en': '/en/publications',
    '/ko': '/ko/posts',
  },
  passToClient: [
    'frontmatter',
    'posts',
  ],
} satisfies Config;

declare global {
  namespace Vike {
    interface Config {
      readonly frontmatter?: {
        readonly title: string;
        readonly date: string;
        readonly draft: boolean;
      };
    }

    interface GlobalContext {
      posts?: PostInfo[];
    }
  }
}
