import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

import * as C from '../constants';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import PageTitle from '../components/PageTitle';

const ProjectsPage: React.FC<unknown> = () => {
  const data = useStaticQuery<Data>(query);

  return (
    <Layout>
      <NavigationBar />
      <PageTitle
        imgSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png'
        title='Projects'
      />
      <ProjectGroupList projectGroups={data.json.projectGroups} />
    </Layout>
  );
};
export default ProjectsPage;

interface Data {
  readonly json: {
    readonly projectGroups: ProjectGroup[];
  };
}
interface ProjectGroup {
  readonly title: string;
  readonly projects: Project[];
}
interface Project {
  readonly images: string[];
  readonly link: string;
  readonly title: string;
}
const query = graphql`
  query {
    json: projectsJson {
      projectGroups {
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

interface ProjectGroupListProps {
  readonly projectGroups: ProjectGroup[];
}
const ProjectGroupList: React.FC<ProjectGroupListProps> = ({ projectGroups }) => {
  return (
    <ProjectGroupListWrapper>
      {
        projectGroups.map((projectGroup, i) => (
          <ProjectGroup key={i} {...{ projectGroup }} />
        ))
      }
    </ProjectGroupListWrapper>
  );
};

const ProjectGroupListWrapper = styled.section({
  margin: '3vw auto',

  width: '80%',

  color: C.textLightBlack,
});

interface ProjectGroupProps {
  readonly projectGroup: ProjectGroup;
}
const ProjectGroup: React.FC<ProjectGroupProps> = ({ projectGroup }) => {
  return (
    <div>
      <ProjectGroupTitle id={projectGroup.title}>{projectGroup.title}</ProjectGroupTitle>
      <hr />
      <ProjectList>
        {
          projectGroup.projects.map((project, i) => (
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

const ProjectGroupTitle = styled.h2({
  paddingTop: '1.5vw',

  fontWeight: 'bold',
  fontSize: C.fontHugeSize,
});

const ProjectList = styled.ul({
  padding: 0,
  paddingLeft: '4em',

  listStyleType: 'none',
});

interface ProjectProps {
  readonly project: Project;
}
const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectWrapper>
      <article>
        <ProjectTitle>
          <a href={project.link}>{project.title}</a>
        </ProjectTitle>
        {
          project.images.map((image) => (
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
