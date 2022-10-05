import { graphql } from 'gatsby';

import AboutPage, { Head } from '../../components/pages/about';

export default AboutPage;
export {
  Head,
};
export const query = graphql`
  query {
    ...SEOInformation
  }
`
