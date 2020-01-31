import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';

const ProjectsPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <NavigationBar />
      <section className='ailrun-blog-projects-page'>
        <Title />
        <ProjectSections projectSections={data.json.projectSections} />
      </section>
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

const Title: React.FC<unknown> = () => {
  return (
    <section className='ailrun-blog-page-title'>
      <img src='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png' />
      <header>
        <h1>Projects</h1>
      </header>
    </section>
  );
};

const ProjectSections: React.FC<any> = ({ projectSections }) => {
  return (
    <section className='ailrun-blog-page-main'>
      {
        projectSections.map((projectSection: any) => (
          <ProjectSection {...{ projectSection }} />
        ))
      }
    </section>
  );
};

const ProjectSection: React.FC<any> = ({ projectSection }) => {
  return (
    <div>
      <h2>{projectSection.title}</h2>
      <hr />
      <ul>
      {
        projectSection.projects.map((project: any, i: number) => (
          <>
            { i !== 0 ? <hr /> : null }
            <Project {...{ project }} />
          </>
        ))
      }
      </ul>
    </div>
  );
};

const Project: React.FC<any> = ({ project }) => {
  return (
    <li>
      <article>
        <p>
          <span>-</span>
          <a href={project.link}>{project.title}</a>
        </p>
        <div>
          {
            project.images.map((image: string) => (
              <img src={image} />
            ))
          }
        </div>
      </article>
    </li>
  );
};
