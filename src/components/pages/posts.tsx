import styled from '@emotion/styled';
import { PageRendererProps, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Language } from '../../utils/languages';
import { useLanguage } from '../LanguageProvider';
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
  readonly allMarkdownRemark: {
    readonly nodes: DataPost[];
  };
}
interface DataPost {
  readonly frontmatter: {
    readonly title: string;
    readonly date?: string;
    readonly dateForSort?: string;
  };
  readonly id: string;
  readonly excerpt: string;
  readonly postPath: string;
  readonly language: string;
  readonly parent: {
    readonly birthTime: string;
    readonly birthTimeForSort: string;
  };
} 
const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date(fromNow: true)
          dateForSort: date
        }
        id
        excerpt(format: HTML, pruneLength: 100, truncate: true)
        postPath
        language

        parent {
          ... on File {
            birthTime(fromNow: true)
            birthTimeForSort: birthTime
          }
        }
      }
    }
  }
`;

const refineData = (data: Data, targetLanguage: Language): PostInfo[] => {
  return data.allMarkdownRemark.nodes
    .filter(({ language }) => language === targetLanguage)
    .map(({ frontmatter, parent, language, ...postInfo }) => {
      const title = frontmatter.title;
      const date = frontmatter.date ?? parent.birthTime;
      const dateForSort = frontmatter.dateForSort ?? parent.birthTimeForSort;

      return { ...postInfo, title, date, dateForSort };
    })
    .sort((post0, post1) => Date.parse(post1.dateForSort) - Date.parse(post0.dateForSort))
    .map(({ dateForSort, ...postInfo }) => postInfo);
};

const PostListWrapper = styled.main({
  margin: '0 20vw',
  marginTop: '60px',

  width: '60vw',
  minHeight: '50vh',
});
