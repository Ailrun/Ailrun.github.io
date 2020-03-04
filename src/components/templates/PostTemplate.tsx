import styled from '@emotion/styled';
import { PageRendererProps, graphql } from 'gatsby';
import React from 'react';

import { useLanguage } from '../LanguageProvider';
import NavigationBar from '../NavigationBar';
import Post, { PostInfo } from '../Post';
import SEO from '../SEO';

export interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostTemplate: React.FC<Props> = ({ data }) => {
  const language = useLanguage();
  const post = refineData(data);

  return (
    <>
      <SEO
        title={post.title}
        description={data.markdownPost.parent.excerpt}
        pathname={data.markdownPost.postPath}
        og={{
          type: 'article',
          additional: {
            author: `https://ailrun.github.io/${language}/about`,
            published_time: post.date,
            section: 'Science',
          },
        }}
      />
      <NavigationBar />
      <PostWrapper>
        <Post
          gatsbyShortname={process.env.GATSBY_DISQUS_NAME as string}
          postInfo={post}
        />
      </PostWrapper>
    </>
  );
};
export default PostTemplate;

interface Data {
  readonly markdownPost: DataMarkdownPost;
}
interface DataMarkdownPost {
  readonly title: string;
  readonly date: string;
  readonly postPath: string;
  readonly parent: {
    readonly html: string;
    readonly excerpt: string;
  };
}
export const query = graphql`
  query ($id: String) {
    markdownPost(id: { eq: $id }) {
      title
      date(fromNow: true)
      postPath
      parent {
        ... on MarkdownRemark {
          html
          excerpt(format: PLAIN, pruneLength: 100, truncate: true)
        }
      }
    }
  }
`;

const refineData = (data: Data): PostInfo => {
  const { parent, ...postInfo } = data.markdownPost;

  return {
    ...postInfo,
    html: parent.html,
  };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
