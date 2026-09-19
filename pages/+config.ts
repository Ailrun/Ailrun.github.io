import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

import type { PostInfo } from '../src/components/PostList';

export default {
  extends: vikeReact,
  meta: {
    metadata: {
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
    'metadata',
    'posts',
  ],
} satisfies Config;

declare global {
  namespace Vike {
    interface Config {
      readonly metadata?: {
        readonly title: string;
        readonly date: string;
        readonly excerpt: string;
        readonly draft: boolean;
      };
    }

    interface GlobalContext {
      posts?: PostInfo[];
    }
  }
}
