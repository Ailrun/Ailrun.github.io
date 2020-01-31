import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from '../components/HalogenLoader';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import { component as AboutPageComponent } from '../purescript/Component/AboutPage.purs';

const AboutPage: React.FC<unknown> = () => {
  const [contentRef, setContentRef] = useState<HTMLDivElement>(null);
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <div ref={setContentRef}></div>
      <NavigationBar />
      <HalogenLoader component={AboutPageComponent} input={data.json.subjects} target={contentRef} />
    </Layout>
  );
};
export default AboutPage;

const query = graphql`
  query {
    json: aboutJson {
      subjects {
        entries
        title
      }
    }
  }
`;
