import styled from '@emotion/styled';
import { PageProps, graphql, HeadProps } from 'gatsby';
import React from 'react';

import useLanguage from '../../hooks/useLanguage';
import { Language, locationToLanguage } from '../../utils/languages';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import PostList, { PostInfo } from '../PostList';
import SEO from '../SEO';

const PostsPage: React.FC<PageProps<Queries.MarkdownPostsInformationFragment>> = ({ data }) => {
  const language = useLanguage();

  const posts = refineData(data, language);

  return (
    <>
      <NavigationBar />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
        title='Posts'
      />
      <PostListWrapper>
        <PostList postInfos={posts} />
      </PostListWrapper>
    </>
  );
};
export default PostsPage;

export const Head: React.FC<HeadProps<Queries.SEOInformationFragment>> = ({ location, data }) => {
  const language = locationToLanguage(location);

  return (
    <SEO
      title='Posts'
      description='List of Posts in VoV'
      pathname={`/${language}/posts`}
      data={data}
    />
  );
};

export const query = graphql`
  fragment MarkdownPostsInformation on Query {
    allMarkdownPost {
      group(field: {language: SELECT}) {
        fieldValue
        nodes {
          title
          date(fromNow: true)
          dateForSort: date
          postPath
          draft
          parent {
            ... on MarkdownRemark {
              excerpt(format: HTML, pruneLength: 100, truncate: true)
            }
          }
        }
      }
    }
  }
`;

const refineData = (data: Queries.MarkdownPostsInformationFragment, targetLanguage: Language): PostInfo[] => {
  const targetGroup =
    data.allMarkdownPost.group
      .find(({ fieldValue }) => fieldValue === targetLanguage);

  return (targetGroup?.nodes ?? [])
    .filter((post) => process.env.NODE_ENV === 'development' || !post.draft)
    .sort((post0, post1) => Date.parse(post1.dateForSort!) - Date.parse(post0.dateForSort!))
    .map(({ title, date, postPath, parent }) => ({
      title: title!,
      date: date!,
      postPath: postPath!,
      /* Try to make the excerpt WAI compatible */
      excerpt: 'excerpt' in parent!
        ? parent!.excerpt!
          .replace(/<a>/g, '<span>')
          .replace(/<a /g, '<span ')
          .replace(/<\/a>/g, '</span>')
        : '',
    }));
};

const PostListWrapper = styled.main({
  margin: '0 20vw',
  marginTop: '60px',

  width: '60vw',
  minHeight: '50vh',
});
