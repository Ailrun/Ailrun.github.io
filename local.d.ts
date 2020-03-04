declare module 'codemirror/lib/codemirror.css'

declare module 'gatsby-link' {
  import * as React from "react";
  import { NavigateOptions, LinkProps } from "@reach/router";

  export interface GatsbyLinkProps<TState> extends LinkProps<TState> {
    /** A class to apply when this Link is active */
    activeClassName?: string;
    /** Inline styles for when this Link is active */
    activeStyle?: object;
    innerRef?: Function;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Class the link as highlighted if there is a partial match via a the `to` being prefixed to the current url */
    partiallyActive?: boolean;
    /** Used to declare that this link replaces the current URL in history with the target */
    replace?: boolean;
    /** Used to pass state data to the linked page.
     * The linked page will have a `location` prop containing a nested `state` object structure containing the passed data.
     */
    state?: TState;
    /** The URL you want to link to */
    to: string;
  }

  /**
   * This component is intended _only_ for links to pages handled by Gatsby. For links to pages on other
   * domains or pages on the same domain not handled by the current Gatsby site, use the normal `<a>` element.
   */
  export default class GatsbyLink<TState> extends React.Component<
    GatsbyLinkProps<TState>
  > {}

  /**
   * Sometimes you need to navigate to pages programmatically, such as during form submissions. In these
   * cases, `Link` won’t work.
   */
  export const navigate: (to: string, options?: NavigateOptions<{}>) => void;

  /**
   * It is common to host sites in a sub-directory of a site. Gatsby lets you set the path prefix for your site.
   * After doing so, Gatsby's `<Link>` component will automatically handle constructing the correct URL in
   * development and production
   */
  export const withPrefix: (path: string) => string;
  export const withAssetPrefix: (path: string) => string;

  /**
   * @deprecated
   * TODO: Remove for Gatsby v3
   */
  export const push: (to: string) => void;

  /**
   * @deprecated
   * TODO: Remove for Gatsby v3
   */
  export const replace: (to: string) => void;

  /**
   * @deprecated
   * TODO: Remove for Gatsby v3
   */
  export const navigateTo: (to: string) => void;
}

declare module 'react-helmet' {
  class Helmet extends React.Component<HelmetProps> {}

  interface HelmetData {}

  interface HelmetProps {
    readonly base?: object;
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

  interface HelmetTags {
    readonly baseTag: Array<any>;
    readonly linkTags: Array<HTMLLinkElement>;
    readonly metaTags: Array<HTMLMetaElement>;
    readonly noscriptTags: Array<any>;
    readonly scriptTags: Array<HTMLScriptElement>;
    readonly styleTags: Array<HTMLStyleElement>;
  }
}

declare module 'react-helmet-async' {
  import * as React from 'react';
  import { HelmetProps, HelmetClientState, HelmetTags } from 'react-helmet';

  export { HelmetProps, HelmetClientState, HelmetTags }

  /**
   * The following types are not used
   * under gatsby with gatsby-plugin-react-helmet-async
   */
  /*
  interface HelmetProviderProps {
    readonly context?: {
      readonly helmet?: HelmetServerState;
    };
    readonly children: React.ReactNode;
  }

  class HelmetProvider extends React.Component<HelmetProviderProps> {
    static canUseDOM: boolean;
  }
  */

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

  interface HelmetDatum<T> {
    toString(): string;
    toComponent(): T;
  }

  interface HelmetHTMLDatum<P extends React.HTMLAttributes<T>, T extends HTMLElement> extends HelmetDatum<React.DetailedReactHTMLElement<P, T>> {}
}

declare module 'sass' {
  const sass: any;
  export = sass;
}
