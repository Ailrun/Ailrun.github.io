import { Redirect } from '@reach/router';
import React from 'react';

const IndexPage: React.FC<unknown> = () => {
  return typeof window !== 'undefined' ? (
    <Redirect to='/en/projects' noThrow={true} />
  ) : null;
};
export default IndexPage;
