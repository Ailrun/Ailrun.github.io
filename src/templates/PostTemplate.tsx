import styled from '@emotion/styled';
import { DiscussionEmbed } from 'disqus-react';
import { PageRendererProps, graphql } from 'gatsby';
import React from 'react';

import FlexSpacer from '../components/FlexSpacer';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import { locationToLanguage } from '../languages';
import * as C from '../styles/constants';

interface Props extends PageRendererProps {
  readonly data: Data;
}
const PostTemplate: React.FC<Props> = ({ data, location }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME as string,
    config: {
      url: 'https://ailrun.github.io',
      identifier: data.post.id,
      title: data.post.frontmatter.title,
    },
  };

  return (
    <Layout>
      <NavigationBar language={locationToLanguage(location)} />
      <PostWrapper>
        <PostContent>
          <PostHeader>
            <PostTitle>{data.post.frontmatter.title}</PostTitle>
            <FlexSpacer />
            <PostDate>{data.post.frontmatter.date ?? data.post.parent.date}</PostDate>
          </PostHeader>
          <PostSeparator />
          <PostMain
            dangerouslySetInnerHTML={{ __html: data.post.html }}
          />
          <DiscussionEmbed {...disqusConfig} />
        </PostContent>
      </PostWrapper>
    </Layout>
  );
};
export default PostTemplate;

interface Data {
  readonly post: Post;
}
interface Post {
  readonly frontmatter: {
    readonly title: string;
    readonly date?: string;
  };
  readonly html: string;
  readonly id: string;
  readonly parent: {
    readonly date: string;
  };
}
export const query = graphql`
  query ($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(fromNow: true)
      }
      html
      id

      parent {
        ... on File {
          date: birthTime(fromNow: true)
        }
      }
    }
  }
`;

const PostWrapper = styled.article({
  width: '100%',
  minHeight: '100vh',
});

const PostContent = styled.article({
  margin: '0 auto',

  width: '60vw',

  paddingTop: C.navigationBarHeight,
});

const PostHeader = styled.header({
  display: 'flex',

  width: '100%',
  paddingTop: '1vw',

  alignItems: 'center',
});

const PostTitle = styled.h1({
  fontSize: C.fontLargeSize,
  color: C.textBlack,
});

const PostDate = styled.span({
  fontSize: C.fontSmallSize,
  color: C.textVeryLightBlack,
});

const PostSeparator = styled.hr({
  margin: '1em 0.5em',

  color: C.textLightBlack,
});

const PostMain = styled.main(
  {
    marginBottom: '3vw',

    padding: '0 1em',
  },
  C.markdown,
);
