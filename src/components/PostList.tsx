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
        <Fragment key={postInfo.postPath}>
          <Post postInfo={postInfo} />
        </Fragment>
      ))
    }
  </PostListRoot>
);
export default PostList;

export interface PostInfo {
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
const Post: React.FC<PostProps> = ({ postInfo }) => {
  return (
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
};

const PostRoot = styled.li({
  marginBottom: '40px',

  width: '100%',
});

const PostLink = styled(Link)({
  display: 'flex',

  width: '100%',

  alignItems: 'center',
  flexWrap: 'wrap',

  [C.mediaQueries[0]]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const PostTitle = styled.h3({
  marginBottom: '0.5em',

  fontSize: C.fontLargeSize,
  color: C.textBlack,

  [C.mediaQueries[0]]: {
    marginBottom: 0,

    fontSize: C.fontBaseSize,
  },
});

const PostDate = styled.span({
  fontSize: C.fontSmallSize,
  color: C.textVeryLightBlack,

  [C.mediaQueries[0]]: {
    alignSelf: 'flex-end',
  },
});

/**
 * This component should use `div` or similar to display
 * inner `p`, `h1`, etc.
 */
const PostExcerpt = styled.div({
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

  [C.mediaQueries[0]]: {
    marginLeft: '0.5em',
    marginRight: '0.5em',
    marginTop: '0.5em',

    fontSize: C.fontSmallSize,
  },
});
