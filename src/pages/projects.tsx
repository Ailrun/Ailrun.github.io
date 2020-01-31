import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import HalogenLoader from '../components/HalogenLoader';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import { component as ProjectsPageComponent } from '../purescript/Component/ProjectsPage.purs';

const ProjectsPage: React.FC<unknown> = () => {
  const [contentRef, setContentRef] = useState<HTMLDivElement>(null);
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <div ref={setContentRef}></div>
      <NavigationBar />
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
