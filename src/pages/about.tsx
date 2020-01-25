import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from '../components/HalogenLoader';
import Layout from '../components/Layout';
import { component as NavigationBarComponent } from '../purescript/Component/NavigationBar.purs';
import { component as AboutPageComponent } from '../purescript/Component/AboutPage.purs';

const AboutPage: React.FC<unknown> = () => {
  const [navigationBarRef, setNavigationBarRef] = useState<HTMLDivElement>(null);
  const [contentRef, setContentRef] = useState<HTMLDivElement>(null);
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
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
