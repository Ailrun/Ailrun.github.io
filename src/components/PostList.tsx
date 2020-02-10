import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';

import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';

export interface Props {
  readonly posts: PostInfo[];
}
const PostList: React.FC<Props> = ({ posts }) => (
  <PostListRoot>
    {
      posts.map((post) => (
        <Fragment key={post.id}>
          <Post {...{ post }} />
        </Fragment>
      ))
    }
  </PostListRoot>
);
export default PostList;

export interface PostInfo {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly postPath: string;
}

const PostListRoot = styled.ul({
  width: '100%',

  listStyle: 'none',
});

interface PostProps {
  post: PostInfo;
}
const Post: React.FC<PostProps> = ({ post }) => (
  <PostRoot>
    <PostLink to={post.postPath}>
      <PostTitle>{post.title}</PostTitle>
      <FlexSpacer />
      <PostDate>{post.date}</PostDate>
      <PostExcerpt>{post.excerpt} ...</PostExcerpt>
    </PostLink>
  </PostRoot>
);

const PostRoot = styled.li({
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
