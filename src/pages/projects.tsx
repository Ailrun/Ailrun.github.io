import { graphql } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from "../components/HalogenLoader";
import { component as StyleComponent } from "../purescript/Style.purs";
import { component as NavigationBarComponent } from "../purescript/Component/NavigationBar.purs";
import { component as ProjectsPageComponent } from "../purescript/Component/ProjectsPage.purs";

export default function ProjectsPage({ data }) {
  const [navigationBarRef, setNavigationBarRef] = useState(null);
  const [contentRef, setContentRef] = useState(null);

  return (
    <>
      <HalogenLoader component={StyleComponent} target={document.head} />
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
      <HalogenLoader component={ProjectsPageComponent} input={data.projectsJson.projectSections} target={contentRef} />
    </>
  );
}

export const query = graphql`
  query {
    projectsJson {
      projectSections {
        title
        projects {
          images
          link
          title
        }
      }
    }
  }
`;
