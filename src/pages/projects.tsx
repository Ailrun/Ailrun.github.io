import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const ProjectsPage: React.FC<unknown> = () => {
  const data = useStaticQuery<any>(query);

  return (
    <Layout>
      <NavigationBar />
      <PageTitle
        imgSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png'
        title='Projects'
      />
      <ProjectSections projectSections={data.json.projectSections} />
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
    <ProjectSectionsWrapper>
      {
        projectSections.map((projectSection: any, i: number) => (
          <ProjectSection key={i} {...{ projectSection }} />
        ))
      }
    </ProjectSectionsWrapper>
  );
};

const ProjectSectionsWrapper = styled.section({
  margin: '3vw auto',

  width: '80%',

  color: C.textLightBlack,
});

const ProjectSection: React.FC<any> = ({ projectSection }) => {
  return (
    <div>
      <ProjectSectionTitle>{projectSection.title}</ProjectSectionTitle>
      <hr />
      <ProjectList>
        {
          projectSection.projects.map((project: any, i: number) => (
            <Fragment key={i}>
              { i !== 0 ? <hr /> : null }
              <Project {...{ project }} />
            </Fragment>
          ))
        }
      </ProjectList>
    </div>
  );
};

const ProjectSectionTitle = styled.h2({
  paddingTop: '1.5vw',

  fontWeight: 'bold',
  fontSize: C.fontHugeSize,
});

const ProjectList = styled.ul({
  padding: 0,
  paddingLeft: '4em',

  listStyleType: 'none',
});

const Project: React.FC<any> = ({ project }) => {
  return (
    <ProjectWrapper>
      <article>
        <ProjectTitle>
          <a href={project.link}>{project.title}</a>
        </ProjectTitle>
        {
          project.images.map((image: string) => (
            <img key={image} src={image} />
          ))
        }
      </article>
    </ProjectWrapper>
  );
};

const projectHeight = '4vw';
const ProjectWrapper = styled.li({
  height: projectHeight,

  fontSize: C.fontLargeSize,
  lineHeight: projectHeight,

  img: {
    maxHeight: projectHeight,

    paddingBottom: '0.3em',

    verticalAlign: 'middle',
  },
});

const ProjectTitle = styled.p({
  display: 'inline-block',

  width: '25vw',
});
