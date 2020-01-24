import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from "../components/HalogenLoader";
import StyleInstaller from "../components/StyleInstaller";
import { component as NavigationBarComponent } from "../purescript/Component/NavigationBar.purs";
import { component as MainPageComponent } from "../purescript/Component/MainPage.purs";

export default function MainPage() {
  const [navigationBarRef, setNavigationBarRef] = useState(null);
  const [contentRef, setContentRef] = useState(null);
  const data = useStaticQuery(query);

  return (
    <>
      <StyleInstaller />
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
      <HalogenLoader component={MainPageComponent} input={data.json.banners} target={contentRef} />
    </>
  );
}

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
