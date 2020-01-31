import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from '../components/HalogenLoader';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import { component as MainPageComponent } from '../purescript/Component/MainPage.purs';

const MainPage: React.FC<unknown> = () => {
  const [contentRef, setContentRef] = useState<HTMLDivElement>(null);
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <div ref={setContentRef}></div>
      <NavigationBar />
      <HalogenLoader component={MainPageComponent} input={data.json.banners} target={contentRef} />
    </Layout>
  );
};
export default MainPage;

const query = graphql`
  query {
    json: mainJson {
      banners {
        background
        description
        linkTitle
        title
      }
    }
  }
`;
