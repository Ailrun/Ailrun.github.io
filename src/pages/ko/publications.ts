import { graphql } from 'gatsby';

import PublicationsPage, { Head } from '../../components/pages/publications';

export default PublicationsPage;
export {
  Head,
};
export const query = graphql`
  query {
    ...SEOInformation
  }
`;
