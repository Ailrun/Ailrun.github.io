import styled from '@emotion/styled';
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';
import Online from './Online';

interface Props {
  readonly gatsbyShortname: string;
  readonly post: PostInfo;
  readonly postPath: string;
}
const Post: React.FC<Props> = ({ gatsbyShortname, post, postPath }) => {
  const disqusConfig = {
    shortname: gatsbyShortname,
    config: {
      url: `https://ailrun.github.io${postPath}`,
      identifier: postPath,
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
      <PostDisqusSeparator />
      <Online fallback={<PostDisqusLoadError />}>
        <DiscussionEmbed {...disqusConfig} />
      </Online>
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

  overflowY: 'hidden',

  [C.mediaQueries[0]]: {
    width: '90%',
  },
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

const PostDisqusSeparator = styled.hr({
  color: C.textLightBlack,
});

const PostDisqusLoadError: React.FC<unknown> = () => {
  return (
    <PostDisqusLoadErrorWrapper>
      Unable to Access Network...
      <br />
      Cannot Load Disqus Comments
    </PostDisqusLoadErrorWrapper>
  );
};

const PostDisqusLoadErrorWrapper = styled.div({
  display: 'block',
  marginTop: '2em',
  marginBottom: '4em',

  textAlign: 'center',
  color: C.textVeryLightBlack,
  fontSize: C.fontBaseSize,
});
