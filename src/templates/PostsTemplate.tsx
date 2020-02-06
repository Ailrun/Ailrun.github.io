import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const PostsTemplate: React.FC<{ data: Data }> = ({ data }) => (
  <Layout>
    <NavigationBar />
    <PageTitle
      backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
      title='Posts'
    />
    <main>
      <PostList posts={data.md.posts} />
    </main>
  </Layout>
);
export default PostsTemplate;

interface Data {
  readonly md: {
    readonly posts: Post[];
  };
}
interface Post {
  readonly frontmatter: {
    readonly title: string;
  };
  readonly postPath: string;
}
export const query = graphql`
  query ($language: String) {
    md: allMarkdownRemark(filter: {language: {eq: $language}}) {
      posts: nodes {
        frontmatter {
          title
        }
        postPath
      }
    }
  }
`;

interface PostListProps {
  posts: Post[];
}
const PostList: React.FC<PostListProps> = ({ posts }) => (
  <PostListWrapper>
    {
      posts.map((post) => (
        <Post key={post.frontmatter.title} {...{ post }} />
      ))
    }
  </PostListWrapper>
);

const PostListWrapper = styled.ul({
  margin: '0 auto',
  marginTop: '2vw',

  width: '70vw',

  listStyle: 'none',
});

interface PostProps {
  post: Post;
}
const Post: React.FC<PostProps> = ({ post }) => (
  <PostWrapper>
    <PostTitle>
      <Link to={post.postPath}>{ post.frontmatter.title }</Link>
    </PostTitle>
  </PostWrapper>
);

const PostWrapper = styled.li({
});

const PostTitle = styled.h3({
  fontSize: C.fontLargeSize,
});
