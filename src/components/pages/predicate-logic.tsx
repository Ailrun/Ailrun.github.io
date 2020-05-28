import 'codemirror/lib/codemirror.css';
import type { PageRendererProps } from 'gatsby';
import React from 'react';

import PredicateLogic from '../PredicateLogic';

const PredicateLogicPage: React.FC<PageRendererProps> = ({ location }) => {
  const initialContent = getInitialContentFromLocation(location);

  if (initialContent === undefined) {
    return (
      null
    );
  }

  return (
    <PredicateLogic initialContent={initialContent} />
  );
};
export default PredicateLogicPage;

const getInitialContentFromLocation = (location: PageRendererProps['location']): string | undefined => {
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
  if (location.href === undefined) {
    return undefined;
  }

  return new URL(location.href).searchParams.get('content') ?? '';
};
