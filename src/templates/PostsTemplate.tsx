import styled from '@emotion/styled';
import { Link, PageRendererProps, graphql } from 'gatsby';
import React, { Fragment } from 'react';

import FlexSpacer from '../components/FlexSpacer';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';
import { locationToLanguage } from '../languages';
import * as C from '../styles/constants';

interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostsTemplate: React.FC<Props> = ({ data, location }) => (
  <Layout>
    <NavigationBar language={locationToLanguage(location)} />
    <PageTitle
      backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/post.png'
      title='Posts'
    />
    <PostListWrapper>
      <PostList>
        {
          data.md.posts.map((post) => (
            <Fragment key={post.id}>
              <Post {...{ post }} />
            </Fragment>
          ))
        }
      </PostList>
    </PostListWrapper>
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

const PostListWrapper = styled.main({
  margin: '0 20%',
  marginTop: '2vw',

  width: '60%',
});

const PostList = styled.ul({
  width: '100%',

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

  width: '98%',

  fontSize: C.fontBaseSize,
  color: C.textLightBlack,
});
