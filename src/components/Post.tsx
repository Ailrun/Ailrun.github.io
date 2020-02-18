import styled from '@emotion/styled';
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';

interface Props {
  readonly gatsbyShortname: string;
  readonly post: PostInfo;
}
const Post: React.FC<Props> = ({ gatsbyShortname, post }) => {
  const disqusConfig = {
    shortname: gatsbyShortname,
    config: {
      url: 'https://ailrun.github.io',
      identifier: post.id,
      title: post.title,
    },
  };

  return (
    <PostRoot>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <FlexSpacer />
        <PostDate>{post.date}</PostDate>
      </PostHeader>
      <PostSeparator />
      <PostMain
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <DiscussionEmbed {...disqusConfig} />
    </PostRoot>
  );
};
export default Post;

export interface PostInfo {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly html: string;
}

const PostRoot = styled.article({
  margin: '0 auto',

  width: '50em',

  paddingTop: C.navigationBarHeight,
});

const PostHeader = styled.header({
  display: 'flex',

  width: '100%',
  paddingTop: '1em',

  alignItems: 'center',
});

const PostTitle = styled.h1({
  fontSize: C.fontHugeSize,
  color: C.textBlack,
});

const PostDate = styled.span({
  marginRight: '1em',

  fontSize: C.fontSmallSize,
  color: C.textVeryLightBlack,
});

const PostSeparator = styled.hr({
  margin: '1em 0',

  color: C.textLightBlack,
});

const PostMain = styled.main(
  {
    marginBottom: '3em',
  },
  C.markdown,
);
