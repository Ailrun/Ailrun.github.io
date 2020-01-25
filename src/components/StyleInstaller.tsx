import React from 'react';

import HalogenLoader from '../components/HalogenLoader';
import { component as StyleComponent } from '../purescript/Style.purs';

const StyleInstaller: React.FC<unknown> = () => {
  /*
   * Gatsby hack: direct access to window is not supported by Gatsby SSR builder
   */
  if (typeof window !== 'undefined' && window.document != null && window.document.head != null) {
    return (
      <HalogenLoader component={StyleComponent} target={window.document.head} />
    );
  } else {
    return null;
  }
};
export default StyleInstaller;
