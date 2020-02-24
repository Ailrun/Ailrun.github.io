import { PageRendererProps } from 'gatsby';
import React from 'react';

import PredicateLogic from '../../components/PredicateLogic';

const PredicateLogicPage: React.FC<PageRendererProps> = ({ location }) => {
  const initialContent = getInitialContentFromLocation(location);

  return (
    <PredicateLogic initialContent={initialContent} />
  );
};
export default PredicateLogicPage;

const getInitialContentFromLocation = (location: PageRendererProps['location']): string => {
  return new URL(location.href).searchParams.get('content') ?? '';
};
