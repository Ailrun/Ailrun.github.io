import 'katex/dist/katex.min.css';
import styled from '@emotion/styled';
import { PageProps, graphql, HeadProps } from 'gatsby';
import React from 'react';

import useLanguage from '../../hooks/useLanguage';
import NavigationBar from '../NavigationBar';
import Post, { PostInfo } from '../Post';
import SEO from '../SEO';

const PostTemplate: React.FC<PageProps<Queries.PostInformationFragment>> = ({ data }) => {
  const post = refineData(data);

  return (
    <>
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

export const Head: React.FC<HeadProps<Queries.PostInformationFragment & Queries.SEOInformationFragment>> = ({ data }) => {
  const language = useLanguage();
  const post = refineData(data);

  return (
    <SEO
      title={post.title}
      description={(data.markdownPost!.parent as Queries.MarkdownRemark).excerpt!}
      pathname={post.postPath}
      og={{
        type: 'article',
        additional: {
          author: `https://ailrun.github.io/${language}/about`,
          published_time: post.date,
          section: 'Science',
        },
      }}
      data={data}
    />
  );
};

export const query = graphql`
  fragment PostInformation on Query {
    markdownPost(id: { eq: $id }) {
      title
      date(fromNow: true)
      postPath
      draft
      parent {
        ... on MarkdownRemark {
          html
          excerpt(format: PLAIN, pruneLength: 100, truncate: true)
        }
      }
    }
  }

  query ($id: String) {
    ...PostInformation
    ...SEOInformation
  }
`;

const refineData = (data: Queries.PostInformationFragment): PostInfo => {
  const { title, date, postPath, draft, parent } = data.markdownPost!;

  return {
    title: title!,
    date: date!,
    postPath: postPath!,
    draft: draft!,
    html: (parent as Queries.MarkdownRemark).html!,
  };
};

const PostWrapper = styled.main({
  width: '100vw',
  minHeight: '100vh',

  backgroundColor: 'rgba(255, 255, 233, 0.84)',
});
