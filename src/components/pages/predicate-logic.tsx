import { PageRendererProps } from 'gatsby';
import React, { Suspense, lazy } from 'react';

import Dummy from '../Dummy';
import Layout from '../Layout';

const PredicateLogic = lazy(() => import('../PredicateLogic'));

const PredicateLogicPage: React.FC<PageRendererProps> = ({ location }) => {
  const initialContent = getInitialContentFromLocation(location);

  if (initialContent === undefined) {
    return (
      <Layout />
    )
  }

  return (
    <Layout>
      <Suspense fallback={Dummy}>
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
