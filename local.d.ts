declare module 'codemirror/lib/codemirror.css'

declare module 'sass' {
  const sass: any;
  export = sass;
}

interface ImportMetaEnv {
  PUBLIC_ENV__VIKE_DISQUS_NAME: string;
  PUBLIC_ENV__VIKE_DRAFT_PATH: string;
}
