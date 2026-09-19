// declare module 'codemirror/lib/codemirror.css'

// declare module 'sass' {
//   const sass: any;
//   export = sass;
// }

declare module '*.mdx' {
  export const frontmatter: { title: string, date: string };
  export const excerpt: string;
}

interface ImportMetaEnv {
  PUBLIC_ENV__DISQUS_NAME: string;
}
