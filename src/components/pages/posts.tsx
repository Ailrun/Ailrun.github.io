import styled from '@emotion/styled';
import { PageRendererProps, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import useLanguage from '../../hooks/useLanguage';
import { Language } from '../../utils/languages';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import PostList, { PostInfo } from '../PostList';
import SEO from '../SEO';

const PostsPage: React.FC<PageRendererProps> = () => {
  const data = useStaticQuery<Data>(query);
  const language = useLanguage();

  const posts = refineData(data, language);

  return (
    <>
      <SEO
        title='Posts'
        description='List of Posts in VoV'
        pathname={`/${language}/posts`}
      />
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

interface Data {
  readonly allMarkdownPost: {
    readonly group: {
      readonly fieldValue: Language;
      readonly nodes: DataMarkdownPost[];
    }[];
  };
}
interface DataMarkdownPost {
  readonly title: string;
  readonly date: string;
  readonly dateForSort: string;
  readonly postPath: string;
  readonly draft: boolean;
  readonly parent: {
    readonly excerpt: string;
  };
} 
const query = graphql`
  query {
    allMarkdownPost {
      group(field: language) {
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

const refineData = (data: Data, targetLanguage: Language): PostInfo[] => {
  const targetGroup =
    data.allMarkdownPost.group
      .find(({ fieldValue }) => fieldValue === targetLanguage);

  return (targetGroup?.nodes ?? [])
    .filter((post) => !post.draft)
    .sort((post0, post1) => Date.parse(post1.dateForSort) - Date.parse(post0.dateForSort))
    .map(({ dateForSort, draft, parent, ...postInfo }) => ({
      ...postInfo,
      /* Try to make the excerpt WAI compatible */
      excerpt: parent.excerpt
        .replace(/<a>/g, '<p>')
        .replace(/<a /g, '<p ')
        .replace(/<\/a>/g, '</p>'),
    }));
};

const PostListWrapper = styled.main({
  margin: '0 20vw',
  marginTop: '60px',

  width: '60vw',
  minHeight: '50vh',
});
