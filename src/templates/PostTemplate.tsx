import styled from '@emotion/styled';
import { PageRendererProps, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import Post, { PostInfo } from '../components/Post';
import { locationToLanguage } from '../languages';

interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostTemplate: React.FC<Props> = ({ data, location }) => {
  const post = refineData(data);

  return (
    <Layout>
      <NavigationBar language={locationToLanguage(location)} />
      <PostWrapper>
        <Post
          gatsbyShortname={process.env.GATSBY_DISQUS_NAME as string}
          post={post}
        />
      </PostWrapper>
    </Layout>
  );
};
export default PostTemplate;

interface Data {
  readonly post: {
    readonly frontmatter: {
      readonly title: string;
      readonly date?: string;
    };
    readonly html: string;
    readonly id: string;
    readonly parent: {
      readonly date: string;
    };
  };
}
export const query = graphql`
  query ($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(fromNow: true)
      }
      html
      id

      parent {
        ... on File {
          date: birthTime(fromNow: true)
        }
      }
    }
  }
`;

const refineData = (data: Data): PostInfo => {
  return {
    id: data.post.id,
    title: data.post.frontmatter.title,
    date: data.post.frontmatter.date ?? data.post.parent.date,
    html: data.post.html,
  };
};

const PostWrapper = styled.main({
  margin: '0 20vw',

  width: '60vw',
  minHeight: '100vh',
});
