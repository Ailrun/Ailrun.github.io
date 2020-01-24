import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from "../components/HalogenLoader";
import StyleInstaller from "../components/StyleInstaller";
import { component as NavigationBarComponent } from "../purescript/Component/NavigationBar.purs";
import { component as AboutPageComponent } from "../purescript/Component/AboutPage.purs";

export default function AboutPage() {
  const [navigationBarRef, setNavigationBarRef] = useState(null);
  const [contentRef, setContentRef] = useState(null);
  const data = useStaticQuery(query);

  return (
    <>
      <StyleInstaller />
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
      <HalogenLoader component={AboutPageComponent} input={data.json.subjects} target={contentRef} />
    </>
  );
}

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
