import styled from '@emotion/styled';
import { PageRendererProps, graphql } from 'gatsby';
import React from 'react';

import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import Post, { PostInfo } from '../Post';

export interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostTemplate: React.FC<Props> = ({ data }) => {
  const post = refineData(data);

  return (
    <Layout>
      <NavigationBar />
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
export const query = graphql`
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

const refineData = (data: Data): PostInfo => {
  const { frontmatter, parent, ...postInfo } = data.post;
  const title = frontmatter.title;
  const date = frontmatter.date ?? parent.date;

  return { ...postInfo, title, date };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
