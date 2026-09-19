import styled from '@emotion/styled';
import React, { PropsWithChildren, useMemo } from 'react';

import useLanguage from '../hooks/useLanguage';
import useOnLine from '../hooks/useOnLine';
import * as C from '../styles/constants';
import dayjs from '../utils/dayjs';

import FlexSpacer from './FlexSpacer';
import DiscussionEmbed, { Props as DiscussionEmbedProps } from './disqus/DiscussionEmbed';

interface Props {
  readonly disqusShortname: string;
  readonly postInfo: PostInfo;
}
const Post: React.FC<PropsWithChildren<Props>> = ({ disqusShortname, postInfo, children }) => {
  const lang = useLanguage();
  const dayjsDate = useMemo(() => dayjs(postInfo.date).locale(lang), [postInfo, lang]);

  return (
    <PostRoot>
      <PostHeader>
        <PostTitle>{postInfo.title}</PostTitle>
        <FlexSpacer />
        <PostDate title={dayjsDate.format('LLL')}>
          {dayjsDate.fromNow()}
        </PostDate>
      </PostHeader>
      <PostSeparator />
      <PostContent>{children}</PostContent>
      {
        !postInfo.draft ? (
          <>
            <PostDisqusSeparator />
            <PostDisqus
              shortname={disqusShortname}
              url={`https://ailrun.github.io${postInfo.postPath}`}
              identifier={postInfo.postPath}
              title={postInfo.title}
            />
          </>
        ) : null
      }
    </PostRoot>
  );
};
export default Post;

export interface PostInfo {
  readonly title: string;
  readonly date: string;
  readonly postPath: string;
  readonly draft: boolean;
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

const PostContent = styled.section(
  {
    marginBottom: '3em',
  },
  C.markdown,
);

const PostDisqusSeparator = styled.hr({
  color: C.textLightBlack,
});

const PostDisqus: React.FC<DiscussionEmbedProps> = ({ shortname, url, identifier, title, onNewComment }) => {
  const onLine = useOnLine();

  if (!onLine) {
    return (
      <PostDisqusLoadError />
    );
  }

  return (
    <DiscussionEmbed {...{ shortname, url, identifier, title, onNewComment }} />
  );
};

const PostDisqusLoadError: React.FC<unknown> = () => {
  return (
    <PostDisqusLoadErrorWrapper>
      Unable to Access Network...
      <br />
      Cannot Load Disqus Comments
    </PostDisqusLoadErrorWrapper>
  );
};

const PostDisqusLoadErrorWrapper = styled.p({
  display: 'block',
  marginTop: '2em',
  marginBottom: '4em',

  textAlign: 'center',
  color: C.textVeryLightBlack,
  fontSize: C.fontBaseSize,
});
