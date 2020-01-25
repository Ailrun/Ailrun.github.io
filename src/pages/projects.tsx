import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from '../components/HalogenLoader';
import Layout from '../components/Layout';
import { component as NavigationBarComponent } from '../purescript/Component/NavigationBar.purs';
import { component as ProjectsPageComponent } from '../purescript/Component/ProjectsPage.purs';

const ProjectsPage: React.FC<unknown> = () => {
  const [navigationBarRef, setNavigationBarRef] = useState<HTMLDivElement>(null);
  const [contentRef, setContentRef] = useState<HTMLDivElement>(null);
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <div ref={setNavigationBarRef}></div>
      <div ref={setContentRef}></div>
      <HalogenLoader component={NavigationBarComponent} target={navigationBarRef} />
      <HalogenLoader component={ProjectsPageComponent} input={data.json.projectSections} target={contentRef} />
    </Layout>
  );
};
export default ProjectsPage;

const query = graphql`
  query {
    json: projectsJson {
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
