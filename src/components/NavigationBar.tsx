import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import * as C from '../constants';
import FlexSpacer from './FlexSpacer';

const NavigationBar: React.FC<unknown> = () => (
  <Wrapper>
    <Title to='/'>
      Valhala of Valkyrie
    </Title>
    <FlexSpacer />
    <NavigationList>
      {
        navigationItems.map((navigationItem) => (
          <NavigationItem key={navigationItem.to} {...navigationItem} />
        ))
      }
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
  marginRight: '20px',

  listStyle: 'none',
});

interface ItemProps {
  to: string;
  text: string;
}

const NavigationItem: React.FC<ItemProps> = ({ to, text }) => (
  <NavigationItemWrapper>
    <Link to={to}>
      {text}
    </Link>
  </NavigationItemWrapper>
);

const NavigationItemWrapper = styled.li({
  display: 'inline-block',

  padding: '0 1vw',

  fontSize: C.fontLargeSize,
}, C.fontDancing);


const navigationItems: ItemProps[] = [
  { to: '/', text: 'Main' },
  { to: '/posts/en', text: 'Posts' },
  { to: '/projects', text: 'Projects' },
  { to: '/about', text: 'About' },
];
