import { graphql } from 'gatsby';

import Page404, { Head } from '../components/pages/404';

export default Page404;
export {
  Head
};
export const query = graphql`
  query {
    ...SEOInformation
  }
`;
