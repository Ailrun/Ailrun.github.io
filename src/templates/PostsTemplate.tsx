import styled from '@emotion/styled';
import { PageRendererProps, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';
import PostList, { PostInfo as PostListPostInfo } from '../components/PostList';
import { locationToLanguage } from '../languages';

interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostsTemplate: React.FC<Props> = ({ data, location }) => {
  const posts = refineData(data);

  return (
    <Layout>
      <NavigationBar language={locationToLanguage(location)} />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
        title='Posts'
      />
      <PostListWrapper>
        <PostList posts={posts} />
      </PostListWrapper>
    </Layout>
  );
};
export default PostsTemplate;

interface Data {
  readonly md: {
    readonly posts: {
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
    }[];
  };
}
export const query = graphql`
  query ($language: String) {
    md: allMarkdownRemark(filter: {language: {eq: $language}}) {
      posts: nodes {
        frontmatter {
          title
          date(fromNow: true)
          dateForSort: date
        }
        id
        excerpt
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

const refineData = (data: Data): PostListPostInfo[] => {
  return data.md.posts
    .map((post) => ({
      id: post.id,
      title: post.frontmatter.title,
      date: post.frontmatter.date ?? post.parent.date,
      dateForSort: post.frontmatter.dateForSort ?? post.parent.dateForSort,
      excerpt: post.excerpt,
      postPath: post.postPath,
    }))
    .sort((post0, post1) => Date.parse(post1.dateForSort) - Date.parse(post0.dateForSort))
    .map((post) => ({
      id: post.id,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      postPath: post.postPath,
    }));
};

const PostListWrapper = styled.main({
  margin: '0 20vw',
  marginTop: '60px',

  width: '60vw',
  minHeight: '50vh',
});
