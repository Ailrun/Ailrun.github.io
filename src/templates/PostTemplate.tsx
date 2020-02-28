import styled from '@emotion/styled';
import { PageRendererProps, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import Post, { PostInfo } from '../components/Post';
import { locationToLanguage } from '../languages';

const PostTemplate: React.FC<PageRendererProps> = ({ location }) => {
  const post = usePostInfo();

  return (
    <Layout>
      <NavigationBar language={locationToLanguage(location)} />
      <PostWrapper>
        <Post
          gatsbyShortname={process.env.GATSBY_DISQUS_NAME as string}
          postInfo={post}
        />
      </PostWrapper>
    </Layout>
  );
};
export default PostTemplate;

interface Data {
  readonly post: DataPost;
}
interface DataPost {
  readonly frontmatter: {
    readonly title: string;
    readonly date?: string;
  };
  readonly html: string;
  readonly id: string;
  readonly postPath: string;
  readonly parent: {
    readonly date: string;
  };
}
const query = graphql`
  query ($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(fromNow: true)
      }
      html
      id
      postPath

      parent {
        ... on File {
          date: birthTime(fromNow: true)
        }
      }
    }
  }
`;

const usePostInfo = (): PostInfo => {
  const { post } = useStaticQuery<Data>(query);

  return refineData(post);
};

const refineData = ({ frontmatter, parent, ...postInfo }: DataPost): PostInfo => {
  const title = frontmatter.title;
  const date = frontmatter.date ?? parent.date;

  return { ...postInfo, title, date };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
