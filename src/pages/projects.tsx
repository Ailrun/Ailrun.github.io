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
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png'
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

const ProjectGroupListWrapper = styled.main({
  margin: '3vw 0',

  width: '100%',

  padding: '0 10%',

  color: C.textLightBlack,
});

interface ProjectGroupProps {
  readonly projectGroup: ProjectGroup;
}
const ProjectGroup: React.FC<ProjectGroupProps> = ({ projectGroup }) => {
  return (
    <ProjectGroupWrapper>
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
    </ProjectGroupWrapper>
  );
};

const ProjectGroupWrapper = styled.figure({
  '& + &': {
    marginTop: '1vw',
  },
});

const ProjectGroupTitle = styled.figcaption({
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
      <ProjectTitle>
        <a href={project.link}>{project.title}</a>
      </ProjectTitle>
      {
        project.images.map((image) => (
          <img key={image} src={image} />
        ))
      }
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.li({
  display: 'flex',

  padding: '0.25em 0',

  fontSize: C.fontLargeSize,

  alignItems: 'center',

  img: {
    maxHeight: '1.5em',

    fontSize: 'inherit',
  },
});

const ProjectTitle = styled.h3({
  width: '25vw',

  fontSize: C.fontLargeSize,
  fontWeight: 'normal',
});
