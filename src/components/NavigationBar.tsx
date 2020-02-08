import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import { Language } from '../languages';
import * as C from '../styles/constants';

import FlexSpacer from './FlexSpacer';
import LanguageSwitch from './LanguageSwitch';

interface Props {
  readonly language: Language;
}
const NavigationBar: React.FC<Props> = ({ language }) => (
  <Wrapper>
    <Title to='/'>
      Valhala of Valkyrie
    </Title>
    <FlexSpacer />
    <NavigationList>
      {
        navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.to} language={language} {...navigationItem} />
        ))
      }
      <NavigationLanguageSwitch className='' language={language} />
    </NavigationList>
  </Wrapper>
);
export default NavigationBar;

const Wrapper = styled.nav({
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
}, C.fontDancing);

const NavigationList = styled.ul({
  display: 'flex',

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
  <NavigationItemWrapper>
    <Link to={'/' + language + to}>
      {text}
    </Link>
  </NavigationItemWrapper>
);

const NavigationItemWrapper = styled.li({
  display: 'inline-block',

  padding: '0 1vw',

  fontSize: C.fontLargeSize,
}, C.fontDancing);

const NavigationLanguageSwitch =
  NavigationItemWrapper.withComponent(LanguageSwitch);


const navigationItems: Omit<ItemProps, 'language'>[] = [
  { to: '/', text: 'Main' },
  { to: '/posts', text: 'Posts' },
  { to: '/projects', text: 'Projects' },
  { to: '/about', text: 'About' },
];
