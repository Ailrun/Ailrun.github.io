import styled from '@emotion/styled';
import { DiscussionEmbed } from 'disqus-react';
import { graphql } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';

const PostTemplate: React.FC<any> = ({ data }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: 'https://ailrun.github.io',
      identifier: data.md.id,
      title: data.md.frontmatter.title,
    },
  };

  return (
    <Layout>
      <NavigationBar />
      <PostWrapper>
        <PostTitle>{data.md.frontmatter.title}</PostTitle>
        <PostSeparator />
        <PostMain
          dangerouslySetInnerHTML={{ __html: data.md.html }}
        />
        <DiscussionEmbed {...disqusConfig} />
      </PostWrapper>
    </Layout>
  );
};
export default PostTemplate;

export const query = graphql`
  query ($id: String) {
    md: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
      id
    }
  }
`;

const PostWrapper = styled.div({
  margin: '0 auto',
  marginTop: C.navigationBarHeight,

  width: '60vw',
});

const PostTitle = styled.h1({
  paddingTop: '1vw',

  fontSize: C.fontLargeSize,
  color: C.textBlack,
});

const PostSeparator = styled.hr({
  margin: '1em 0',
});

const PostMain = styled.main({
  marginBottom: '3vw',

  padding: '0 1em',

  ...C.markdown,
});
