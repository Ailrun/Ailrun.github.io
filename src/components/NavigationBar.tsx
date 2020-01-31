import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import * as C from '../constants';

const NavigationBar: React.FC<unknown> = () => {
  return (
    <Wrapper>
      <Title>
        <Link to='/'>
          Valhala of Valkyrie
        </Link>
      </Title>
      <NavigationList>
        <NavigationItem to='/' text='Main' />
        <NavigationItem to='/projects' text='Projects' />
        <NavigationItem to='/about' text='About' />
      </NavigationList>
    </Wrapper>
  );
};
export default NavigationBar;

interface ItemProps {
  to: string;
  text: string;
}

const Wrapper = styled.header({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,

  margin: '0 auto',

  width: '100%',
  height: C.navigationBarHeight,

  backgroundColor: C.backgroundBlack,

  lineHeight: C.navigationBarHeight,
});

const Title = styled.h1({
  display: 'inline-block',

  height: 'inherit',

  fontSize: C.fontLargeSize,

  a: {
    display: 'inline-block',

    marginLeft: '0.5em',

    height: 'inherit',

    ...C.fontDancing,
    fontSize: C.fontLargeSize,
    color: C.textWhite,
  },
});

const NavigationList = styled.ul({
  display: 'inline',
  float: 'right',

  margin: 'auto 0',

  height: 'inherit',
});

const NavigationItem: React.FC<ItemProps> = ({ to, text }) => {
  return (
    <NavigationItemWrapper>
      <Link to={to}>
        {text}
      </Link>
    </NavigationItemWrapper>
  );
}

const NavigationItemWrapper = styled.li({
  display: 'inline-block',

  height: 'inherit',

  fontSize: C.fontLargeSize,

  a: {
    marginLeft: '1vw',
    marginRight: '1vw',

    ...C.fontDancing,
    fontSize: C.fontLargeSize,
    color: C.textWhite,
  },
});
