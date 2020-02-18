import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import { Language } from '../languages';
import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';

interface Props {
  readonly language: Language;
}
const NavigationBar: React.FC<Props> = ({ language }) => (
  <Root>
    <Title to={`/${language}/posts/`}>
      Valhala of Valkyrie
    </Title>
    <FlexSpacer />
    <NavigationList>
      {
        navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.to} language={language} {...navigationItem} />
        ))
      }
    </NavigationList>
  </Root>
);
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
  readonly language: Language;
  readonly to: string;
  readonly text: string;
}
const NavigationItem: React.FC<ItemProps> = ({ language, to, text }) => (
  <NavigationItemRoot>
    <Link to={'/' + language + to}>
      {text}
    </Link>
  </NavigationItemRoot>
);

const NavigationItemRoot = styled.li({
  display: 'inline-block',

  padding: '0 0.5em',

  fontSize: C.fontLargeSize,
}, C.fontDancing);


const navigationItems: Omit<ItemProps, 'language'>[] = [
  { to: '/posts/', text: 'Posts' },
  { to: '/projects/', text: 'Projects' },
  { to: '/about/', text: 'About' },
];
