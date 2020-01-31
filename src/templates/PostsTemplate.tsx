import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const PostsTemplate: React.FC<{ data: Data }> = ({ data }) => (
  <Layout>
    <NavigationBar />
    <PageTitle
      imgSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
      title='Posts'
    />
    <PostList posts={data.md.posts} />
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

  width: '70vw',

  listStyleType: 'none',
});

interface PostProps {
  post: Post;
}
const Post: React.FC<PostProps> = ({ post }) => (
  <PostWrapper>
    <Link to={post.postPath}>{ post.frontmatter.title }</Link>
  </PostWrapper>
);

const PostWrapper = styled.li({
});
