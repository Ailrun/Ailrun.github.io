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
        description={data.markdownRemark.excerpt}
        pathname={data.markdownRemark.postPath}
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
  readonly markdownRemark: DataPost;
}
interface DataPost {
  readonly frontmatter: {
    readonly title: string;
    readonly date?: string;
  };
  readonly html: string;
  readonly id: string;
  readonly excerpt: string;
  readonly postPath: string;
  readonly parent: {
    readonly birthTime: string;
  };
}
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(fromNow: true)
      }
      html
      id
      excerpt(format: PLAIN, pruneLength: 100, truncate: true)
      postPath

      parent {
        ... on File {
          birthTime(fromNow: true)
        }
      }
    }
  }
`;

const refineData = (data: Data): PostInfo => {
  const { frontmatter, parent, excerpt, ...postInfo } = data.markdownRemark;
  const title = frontmatter.title;
  const date = frontmatter.date ?? parent.birthTime;

  return { ...postInfo, title, date };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
