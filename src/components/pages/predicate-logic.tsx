import 'codemirror/lib/codemirror.css';
import { PageRendererProps } from 'gatsby';
import React, { Suspense } from 'react';

import { locationToLanguage } from '../../utils/languages';
import Dummy from '../Dummy';
import Layout from '../Layout';
import PredicateLogic from '../PredicateLogic';

const PredicateLogicPage: React.FC<PageRendererProps> = ({ location }) => {
  const language = locationToLanguage(location);
  const initialContent = getInitialContentFromLocation(location);

  if (initialContent === undefined) {
    return (
      <Layout language={language} />
    );
  }

  return (
    <Layout language={language}>
      <Suspense fallback={<Dummy />}>
        <PredicateLogic initialContent={initialContent} />
      </Suspense>
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