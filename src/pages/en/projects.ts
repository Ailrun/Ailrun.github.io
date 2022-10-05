import { graphql } from 'gatsby';

import ProjectsPage, { Head } from '../../components/pages/projects';

export default ProjectsPage;
export {
  Head,
};
export const query = graphql`
  query {
    ...SEOInformation
  }
`;
