import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import useLanguage from '../hooks/useLanguage';
import * as C from '../styles/constants';
import { Language } from '../utils/languages';

import FlexSpacer from './FlexSpacer';

const NavigationBar: React.FC<unknown> = () => {
  const language = useLanguage();

  return (
    <Root>
      <Title to={`/${language}/`}>
        Valhalla of Valkyrie&nbsp;&nbsp;by&nbsp;&nbsp;Junyoung/Clare Jang
      </Title>
      <FlexSpacer />
      <NavigationList>
        {
          getNavigationItems(language).map((navigationItem) => (
            <NavigationItem key={navigationItem.text} {...navigationItem} />
          ))
        }
      </NavigationList>
    </Root>
  );
};
export default NavigationBar;

const Root = styled.nav({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,

  width: '100vw',
  height: C.navigationBarHeight,

  backgroundColor: C.backgroundBlack,

  color: C.textWhite,

  alignItems: 'center',
});

const Title = styled(Link)({
  display: 'inline-block',

  padding: '0 0.5em',

  fontSize: C.fontLargeSize,

  [C.mediaQueries[0]]: {
    display: 'none',
  },
}, C.fontDancing);

const NavigationList = styled.ul({
  display: 'flex',

  /* Approximate maximum size of scrollbar
   */
  marginRight: '20px',

  listStyle: 'none',

  alignItems: 'center',
});

interface ItemProps {
  readonly to: string;
  readonly text: string;
}
const NavigationItem: React.FC<ItemProps> = ({ to, text }) => {
  return (
    <NavigationItemRoot>
      <Link to={to}>
        {text}
      </Link>
    </NavigationItemRoot>
  );
};
const NavigationItemRoot = styled.li({
  display: 'inline-block',

  padding: '0 0.5em',

  fontSize: C.fontLargeSize,
}, C.fontDancing);


const getNavigationItems: (language: Language) => ItemProps[] = (language) => {
  return [
    ...(
      language === Language.KO ?
        [{ to: `/${language}/posts/`, text: 'Posts' }] :
        []
    ),
    { to: `/${language}/publications/`, text: 'Publications' },
    { to: `/${language}/projects/`, text: 'Projects' },
    { to: `/${language}/about/`, text: 'About' },
  ];
};
