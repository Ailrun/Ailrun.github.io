import styled from '@emotion/styled';
import { PageRendererProps, graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

import { locationToLanguage } from '../../languages';
import * as C from '../../styles/constants';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';

const ProjectsPage: React.FC<PageRendererProps> = ({ location }) => {
  const language = locationToLanguage(location);
  const data = useStaticQuery<Data>(query);

  return (
    <Layout>
      <NavigationBar language={language} />
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
      <ProjectGroupTitleSeparator />
      <ProjectList>
        {
          projectGroup.projects.map((project, i) => (
            <Fragment key={i}>
              {
                i !== 0 ? (
                  <ProjectSeparator />
                ) : null
              }
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
  fontSize: C.fontLargeSize,
});

const ProjectGroupTitleSeparator = styled.hr({
  color: C.textLightBlack,
});

const ProjectList = styled.ul({
  padding: 0,
  paddingLeft: '4em',

  listStyleType: 'none',
});

const ProjectSeparator = styled.hr({
  color: C.textLightBlack,
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

  padding: '0.5em 0',

  fontSize: C.fontBaseSize,

  alignItems: 'center',

  img: {
    maxHeight: '1.8em',

    fontSize: 'inherit',
  },
});

const ProjectTitle = styled.h3({
  width: '25vw',

  fontWeight: 'normal',
});
