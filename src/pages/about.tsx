import { graphql } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from "../components/HalogenLoader";
import { component as StyleComponent } from "../purescript/Style.purs";
import { component as NavigationBarComponent } from "../purescript/Component/NavigationBar.purs";
import { component as AboutPageComponent } from "../purescript/Component/AboutPage.purs";

export default function AboutPage({ data }) {
  const [navigationBarRef, setNavigationBarRef] = useState(null);
  const [contentRef, setContentRef] = useState(null);

  return (
    <>
      <HalogenLoader component={StyleComponent} target={document.head} />
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
      <HalogenLoader component={AboutPageComponent} input={data.aboutJson.subjects} target={contentRef} />
    </>
  );
}

export const query = graphql`
  query {
    aboutJson {
      subjects {
        entries
        title
      }
    }
  }
`;
