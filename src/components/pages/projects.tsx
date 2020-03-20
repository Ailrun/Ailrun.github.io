import styled from '@emotion/styled';
import type { PageRendererProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React, { Fragment } from 'react';

import dataProjects from '../../data/projects';
import useLanguage from '../../hooks/useLanguage';
import * as C from '../../styles/constants';
import type { Language } from '../../utils/languages';
import NavigationBar from '../NavigationBar';
import PageTitle from '../PageTitle';
import SEO from '../SEO';

const ProjectsPage: React.FC<PageRendererProps> = () => {
  const language = useLanguage();
  const data = dataProjects[language];

  return (
    <>
      <SEO
        title='Projects'
        description='List of Posts in VoV'
        pathname={`/${language}/projects`}
      />
      <NavigationBar />
      <PageTitle
        backgroundSrc='https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png'
        title='Projects'
      />
      <ProjectGroupList projectGroups={data.projectGroups} />
    </>
  );
};
export default ProjectsPage;

type ProjectGroup = typeof dataProjects[Language.KO]['projectGroups'][0];
type Project = ProjectGroup['projects'][0];

interface ProjectGroupListProps {
  readonly projectGroups: ProjectGroup[];
}
const ProjectGroupList: React.FC<ProjectGroupListProps> = ({ projectGroups }) => {
  return (
    <ProjectGroupListRoot>
      {
        projectGroups.map((projectGroup) => (
          <ProjectGroup key={projectGroup.title} {...{ projectGroup }} />
        ))
      }
    </ProjectGroupListRoot>
  );
};

const ProjectGroupListRoot = styled.main({
  margin: '3em auto',

  width: '80%',

  color: C.textLightBlack,
});

interface ProjectGroupProps {
  readonly projectGroup: ProjectGroup;
}
const ProjectGroup: React.FC<ProjectGroupProps> = ({ projectGroup }) => {
  return (
    <ProjectGroupRoot>
      <ProjectGroupTitle id={projectGroup.title}>{projectGroup.title}</ProjectGroupTitle>
      <ProjectGroupTitleSeparator />
      <ProjectList>
        {
          projectGroup.projects.map((project, i) => (
            <Fragment key={`${project.title}:${project.link}`}>
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
    </ProjectGroupRoot>
  );
};

const ProjectGroupRoot = styled.figure({
  '& + &': {
    marginTop: '1em',
  },
});

const ProjectGroupTitle = styled.figcaption({
  fontWeight: 'bold',
  fontSize: C.fontLargeSize,

  [C.mediaQueries[0]]: {
    fontSize: C.fontBaseSize,
  },
});

const ProjectGroupTitleSeparator = styled.hr({
  color: C.textLightBlack,
});

const ProjectList = styled.ul({
  padding: 0,
  paddingLeft: '4em',

  listStyleType: 'none',

  [C.mediaQueries[0]]: {
    paddingLeft: '1em',
  },
});

const ProjectSeparator = styled.hr({
  color: C.textLightBlack,
});

interface ProjectProps {
  readonly project: Project;
}
const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectRoot>
      <ProjectTitle>
        <OutboundLink href={project.link}>{project.title}</OutboundLink>
      </ProjectTitle>
      <ProjectImageList>
        {
          project.images.map((image) => (
            <ProjectImageItem key={image}>
              <ProjectImage src={image} />
            </ProjectImageItem>
          ))
        }
      </ProjectImageList>
    </ProjectRoot>
  );
};

const ProjectRoot = styled.li({
  display: 'flex',

  padding: '0.5em 0',

  fontSize: C.fontBaseSize,

  alignItems: 'center',

  [C.mediaQueries[0]]: {
    fontSize: C.fontSmallSize,
  },
});

const ProjectTitle = styled.h3({
  width: '25em',
  flexShrink: 0,

  fontWeight: 'normal',

  [C.mediaQueries[0]]: {
    flexShrink: 1,
  },
});

const ProjectImageList = styled.ul({
  display: 'inline',

  flexGrow: 1,

  listStyle: 'none',

  [C.mediaQueries[0]]: {
    textAlign: 'right',
  },
});

const ProjectImageItem = styled.li({
  display: 'inline',
});

const ProjectImage = styled.img({
  maxHeight: '1.8em',
  minHeight: '0.8em',

  fontSize: 'inherit',
});
