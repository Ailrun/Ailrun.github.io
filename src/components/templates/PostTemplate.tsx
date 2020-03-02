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
        description={data.post.excerpt}
        pathname={data.post.postPath}
        og={{
          type: 'article',
          additional: {
            /* eslint-disable @typescript-eslint/camelcase */
            author: `https://ailrun.github.io/${language}/about`,
            published_time: post.date,
            section: 'Science',
            /* eslint-enable @typescript-eslint/camelcase */
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
  readonly post: DataPost;
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
      excerpt(format: PLAIN, pruneLength: 100, truncate: true)
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
  const { frontmatter, parent, excerpt, ...postInfo } = data.post;
  const title = frontmatter.title;
  const date = frontmatter.date ?? parent.date;

  return { ...postInfo, title, date };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
