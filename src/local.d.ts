declare module 'react-helmet-async' {
  import * as React from 'react';

  interface HelmetTags {
    readonly baseTag: Array<any>;
    readonly linkTags: Array<HTMLLinkElement>;
    readonly metaTags: Array<HTMLMetaElement>;
    readonly noscriptTags: Array<any>;
    readonly scriptTags: Array<HTMLScriptElement>;
    readonly styleTags: Array<HTMLStyleElement>;
  }

  interface HelmetProps {
    readonly base?: any;
    readonly bodyAttributes?: React.HTMLAttributes<HTMLBodyElement>;
    readonly children?: React.ReactNodeArray | React.ReactNode;
    readonly defaultTitle?: string;
    readonly defer?: boolean;
    readonly encodeSpecialCharacters?: boolean;
    readonly htmlAttributes?: React.HtmlHTMLAttributes<HTMLHtmlElement>;
    readonly link?: Array<React.LinkHTMLAttributes<HTMLLinkElement>[]>;
    readonly meta?: Array<React.MetaHTMLAttributes<HTMLMetaElement>[]>;
    readonly noscript?: Array<{ innerHTML: string }>;
    readonly onChangeClientState?: (newState: HelmetClientState, addedTags: HelmetTags, removedTags: HelmetTags) => void;
    readonly script?: Array<React.ScriptHTMLAttributes<HTMLScriptElement>[]>;
    readonly style?: Array<React.StyleHTMLAttributes<HTMLStyleElement>[]>;
    readonly title?: string;
    readonly titleAttributes?: React.HTMLAttributes<HTMLTitleElement>[];
    readonly titleTemplate?: string;
  }

  class Helmet extends React.Component<HelmetProps> {}

  interface HelmetProviderProps {
    readonly context?: {
      readonly helmet?: HelmetServerState;
    };
    readonly children: React.ReactNode;
  }

  class HelmetProvider extends React.Component<{}> {
    static canUseDOM: boolean;
  }

  interface HelmetServerState {
    readonly base: HelmetHTMLDatum<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    readonly bodyAttributes: HelmetDatum<React.HTMLAttributes<HTMLBodyElement>>;
    readonly htmlAttributes: HelmetDatum<React.HtmlHTMLAttributes<HTMLHtmlElement>>;
    readonly link: HelmetHTMLDatum<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    readonly meta: HelmetHTMLDatum<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    readonly noscript: HelmetHTMLDatum<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    readonly script: HelmetHTMLDatum<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    readonly style: HelmetHTMLDatum<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    readonly title: HelmetHTMLDatum<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
  }

  interface HelmetClientState {
    readonly baseTag: [] | [HTMLBaseElement];
    readonly bodyAttributes: React.HTMLAttributes<HTMLBodyElement>;
    readonly htmlAttributes: React.HtmlHTMLAttributes<HTMLHtmlElement>;
    readonly defer: boolean;
    readonly encode: boolean;
    readonly linkTags: Array<HTMLLinkElement>;
    readonly metaTags: Array<HTMLMetaElement>;
    readonly noscriptTags: Array<HTMLElement>;
    readonly onChangeClientState: (newState: HelmetClientState, addedTags: HelmetTags, removedTags: HelmetTags) => void;
    readonly scriptTags: Array<HTMLScriptElement>;
    readonly styleTags: Array<HTMLStyleElement>;
    readonly title: string;
    readonly titleAttributes: object;
  }

  interface HelmetDatum<T> {
    toString(): string;
    toComponent(): T;
  }

  interface HelmetHTMLDatum<P extends React.HTMLAttributes<T>, T extends HTMLElement> extends HelmetDatum<React.DetailedReactHTMLElement<P, T>> {}
}
