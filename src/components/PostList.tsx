import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';

import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';

export interface Props {
  readonly postInfos: PostInfo[];
}
const PostList: React.FC<Props> = ({ postInfos }) => (
  <PostListRoot>
    {
      postInfos.map((postInfo) => (
        <Fragment key={postInfo.id}>
          <Post postInfo={postInfo} />
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
  postInfo: PostInfo;
}
const Post: React.FC<PostProps> = ({ postInfo }) => (
  <PostRoot>
    <PostLink to={postInfo.postPath}>
      <PostTitle>{postInfo.title}</PostTitle>
      <FlexSpacer />
      <PostDate>{postInfo.date}</PostDate>
      <PostExcerpt
        dangerouslySetInnerHTML={{ __html: postInfo.excerpt }}
      />
    </PostLink>
  </PostRoot>
);

const PostRoot = styled.li({
  width: '100%',

  '& + &': {
    marginTop: '40px',
  },
});

const PostLink = styled(Link)({
  display: 'flex',

  width: '100%',

  alignItems: 'center',
  flexWrap: 'wrap',
});

const PostTitle = styled.h3({
  marginBottom: '0.5em',

  fontSize: C.fontLargeSize,
  color: C.textBlack,
});

const PostDate = styled.span({
  fontSize: C.fontSmallSize,
  color: C.textVeryLightBlack,
});

const PostExcerpt = styled.span({
  marginLeft: '1em',

  width: 'calc(100% - 1em)',

  fontSize: C.fontBaseSize,
  color: C.textLightBlack,

  '*': {
    display: 'inline',
  },

  'h1, h2, h3, h4, h5, h6': {
    display: 'none',
  },
});