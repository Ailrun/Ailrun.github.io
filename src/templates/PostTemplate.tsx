import { DiscussionEmbed } from 'disqus-react';
import { graphql } from 'gatsby';
import React from 'react';

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
      <h1>{data.md.frontmatter.title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: data.md.html }}
      />
      <DiscussionEmbed {...disqusConfig} />
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
