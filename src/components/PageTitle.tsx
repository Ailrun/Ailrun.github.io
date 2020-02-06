import styled from '@emotion/styled';
import React from 'react';

import * as C from '../constants';

export interface Props {
  readonly backgroundSrc: string;
  readonly title: string;
}
const PageTitle: React.FC<Props> = ({ backgroundSrc, title }) => (
  <Wrapper backgroundSrc={backgroundSrc}>
    <TitleText>{title}</TitleText>
  </Wrapper>
);
export default PageTitle;

interface WrapperProps {
  readonly backgroundSrc: string;
}
const Wrapper = styled.header<WrapperProps>({
  display: 'flex',

  width: '100%',
  height: '26vw',

  backgroundColor: 'white',
  backgroundSize: 'cover',

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
