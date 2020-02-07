import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import React, { Fragment } from 'react';

import * as C from '../constants';
import FlexSpacer from '../components/FlexSpacer';
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
    readonly date?: string;
  };
  readonly id: string;
  readonly excerpt: string;
  readonly postPath: string;
  readonly parent: {
    readonly date: string;
  };
}
export const query = graphql`
  query ($language: String) {
    md: allMarkdownRemark(filter: {language: {eq: $language}}) {
      posts: nodes {
        frontmatter {
          title
          date(fromNow: true)
        }
        id
        excerpt
        postPath

        parent {
          ... on File {
            date: birthTime(fromNow: true)
          }
        }
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
        <Fragment key={post.id}>
          <Post {...{ post }} />
        </Fragment>
      ))
    }
  </PostListWrapper>
);

const PostListWrapper = styled.ul({
  margin: '0 20%',
  marginTop: '2vw',

  width: '60%',

  listStyle: 'none',
});

interface PostProps {
  post: Post;
}
const Post: React.FC<PostProps> = ({ post }) => (
  <PostWrapper>
    <PostLink to={post.postPath}>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <FlexSpacer />
      <PostDate>{post.frontmatter.date ?? post.parent.date}</PostDate>
      <PostExcerpt>{post.excerpt} ...</PostExcerpt>
    </PostLink>
  </PostWrapper>
);

const PostWrapper = styled.li({
  width: '100%',

  '& + &': {
    marginTop: '2vw',
  },
});

const PostLink = styled(Link)({
  display: 'flex',

  width: '100%',

  alignItems: 'center',
  flexWrap: 'wrap',
});

const PostTitle = styled.h3({
  fontSize: C.fontLargeSize,
  color: C.textBlack,
});

const PostDate = styled.span({
  fontSize: C.fontSmallSize,
  color: C.textVeryLightBlack,
});

const PostExcerpt = styled.span({
  marginTop: '0.5vw',
  marginLeft: '2%',

  width: '100%',

  fontSize: C.fontBaseSize,
  color: C.textLightBlack,
});
