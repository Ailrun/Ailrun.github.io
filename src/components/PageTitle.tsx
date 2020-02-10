import styled from '@emotion/styled';
import React from 'react';

import * as C from '../styles/constants';

export interface Props {
  readonly backgroundSrc: string;
  readonly title: string;
}
const PageTitle: React.FC<Props> = ({ backgroundSrc, title }) => (
  <Root backgroundSrc={backgroundSrc}>
    <TitleText>{title}</TitleText>
  </Root>
);
export default PageTitle;

interface RootProps {
  readonly backgroundSrc: string;
}
const Root = styled.header<RootProps>({
  display: 'flex',

  width: '100%',
  height: '24vw',

  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: 'white',

  alignItems: 'center',
}, ({ backgroundSrc }) => ({
  backgroundImage: `url('${backgroundSrc}')`,
}));

const TitleText = styled.h1({
  paddingLeft: '7%',

  color: C.textWhite,
  fontWeight: 'bold',
  fontSize: C.fontGiantSize,
});
