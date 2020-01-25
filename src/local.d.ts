declare module 'react-helmet' {
  import * as React from 'react';

  interface OtherElementAttributes {
    [key: string]: string | number | boolean | null | undefined;
  }

  type HtmlProps = JSX.IntrinsicElements['html'] & OtherElementAttributes;

  type BodyProps = JSX.IntrinsicElements['body'] & OtherElementAttributes;

  type LinkProps = JSX.IntrinsicElements['link'];

  type MetaProps = JSX.IntrinsicElements['meta'];

  export interface HelmetTags {
    readonly baseTag: Array<any>;
    readonly linkTags: Array<HTMLLinkElement>;
    readonly metaTags: Array<HTMLMetaElement>;
    readonly noscriptTags: Array<any>;
    readonly scriptTags: Array<HTMLScriptElement>;
    readonly styleTags: Array<HTMLStyleElement>;
  }

  export interface HelmetProps {
    readonly base?: any;
    readonly bodyAttributes?: BodyProps;
    readonly children?: React.ReactNodeArray | React.ReactNode;
    readonly defaultTitle?: string;
    readonly defer?: boolean;
    readonly encodeSpecialCharacters?: boolean;
    readonly htmlAttributes?: HtmlProps;
    readonly link?: LinkProps[];
    readonly meta?: MetaProps[];
    readonly noscript?: Array<object>;
    readonly onChangeClientState?: (newState: HelmetClientState, addedTags: HelmetTags, removedTags: HelmetTags) => void;
    readonly script?: Array<object>;
    readonly style?: Array<object>;
    readonly title?: string;
    readonly titleAttributes?: object;
    readonly titleTemplate?: string;
  }

  export class Helmet extends React.Component<HelmetProps> {
    static peek(): HelmetClientState | HelmetServerState;
    static rewind(): HelmetServerState;
    static renderStatic(): HelmetServerState;
    static set canUseDOM(canUseDOM: boolean);
  }

  export interface HelmetServerState {
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

  export interface HelmetClientState {
    readonly baseTag: [] | [HTMLBaseElement];
    readonly bodyAttributes: BodyProps;
    readonly htmlAttributes: HtmlProps;
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

  export interface HelmetDatum<T> {
    toString(): string;
    toComponent(): T;
  }

  export interface HelmetHTMLDatum<P extends React.HTMLAttributes<T>, T extends HTMLElement> extends HelmetDatum<React.DetailedReactHTMLElement<P, T>> {}
}

declare module 'purescript-halogen' {
  export interface HalogenComponent {
    readonly __do_not_instantiate_this__: unknown;
  }
}
