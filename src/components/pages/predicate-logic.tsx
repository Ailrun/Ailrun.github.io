import 'codemirror/lib/codemirror.css';
import { PageRendererProps } from 'gatsby';
import React from 'react';

import Layout from '../Layout';
import PredicateLogic from '../PredicateLogic';

const PredicateLogicPage: React.FC<PageRendererProps> = ({ location }) => {
  const initialContent = getInitialContentFromLocation(location);

  if (initialContent === undefined) {
    return (
      <Layout />
    );
  }

  return (
    <Layout>
      <PredicateLogic initialContent={initialContent} />
    </Layout>
  );
};
export default PredicateLogicPage;

const getInitialContentFromLocation = (location: PageRendererProps['location']): string | undefined => {
  if (location.href === undefined) {
    return undefined;
  }

  return new URL(location.href).searchParams.get('content') ?? '';
};
