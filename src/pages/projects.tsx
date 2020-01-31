import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const ProjectsPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <NavigationBar />
      <section className='ailrun-blog-projects-page'>
        <PageTitle
          imgSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png'
          title='Projects'
        />
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

const ProjectSections: React.FC<any> = ({ projectSections }) => {
  return (
    <section className='ailrun-blog-page-main'>
      {
        projectSections.map((projectSection: any, i: number) => (
          <ProjectSection key={i} {...{ projectSection }} />
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
          <Fragment key={i}>
            { i !== 0 ? <hr /> : null }
            <Project {...{ project }} />
          </Fragment>
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
              <img key={image} src={image} />
            ))
          }
        </div>
      </article>
    </li>
  );
};
