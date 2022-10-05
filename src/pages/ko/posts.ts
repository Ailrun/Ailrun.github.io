import { graphql } from 'gatsby';

import PostsPage, { Head } from '../../components/pages/posts';

export default PostsPage;
export {
  Head,
};
export const query = graphql`
  query {
    ...MarkdownPostsInformation
    ...SEOInformation
  }
`;
