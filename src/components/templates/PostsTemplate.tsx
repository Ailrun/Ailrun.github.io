import styled from '@emotion/styled';
import { PageRendererProps, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { locationToLanguage } from '../../utils/languages';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import PostList, { PostInfo } from '../PostList';

const PostsTemplate: React.FC<PageRendererProps> = ({ location }) => {
  const posts = usePostInfos();

  return (
    <Layout>
      <NavigationBar language={locationToLanguage(location)} />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
        title='Posts'
      />
      <PostListWrapper>
        <PostList postInfos={posts} />
      </PostListWrapper>
    </Layout>
  );
};
export default PostsTemplate;

interface Data {
  readonly allMarkdownRemark: {
    readonly posts: DataPost[];
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
  readonly parent: {
    readonly date: string;
    readonly dateForSort: string;
  };
} 
const query = graphql`
  query ($language: String) {
    allMarkdownRemark(filter: {language: {eq: $language}}) {
      posts: nodes {
        frontmatter {
          title
          date(fromNow: true)
          dateForSort: date
        }
        id
        excerpt(format: HTML, pruneLength: 100, truncate: true)
        postPath

        parent {
          ... on File {
            date: birthTime(fromNow: true)
            dateForSort: birthTime
          }
        }
      }
    }
  }
`;

const usePostInfos = (): PostInfo[] => {
  const { posts } = useStaticQuery<Data>(query).allMarkdownRemark;

  return refineData(posts);
};

const refineData = (posts: DataPost[]): PostInfo[] => {
  return posts
    .map(({ frontmatter, parent, ...postInfo }) => {
      const title = frontmatter.title;
      const date = frontmatter.date ?? parent.date;
      const dateForSort = frontmatter.dateForSort ?? parent.dateForSort;

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
