import styled from '@emotion/styled';
import React from 'react';

import * as C from '../constants';

export interface Props {
  readonly imgSrc: string;
  readonly title: string;
}
const PageTitle: React.FC<Props> = ({ imgSrc, title }) => (
  <Wrapper>
    <TitleImage src={imgSrc} />
    <TitleText>
      <h1>{title}</h1>
    </TitleText>
  </Wrapper>
);
export default PageTitle;

const pageTitleHeight: number = 26;

const Wrapper = styled.section({
  position: 'relative',

  width: '100%',
  height: `${pageTitleHeight}vw`,

  backgroundColor: 'white',
});

const TitleImage = styled.img({
  position: 'absolute',

  width: 'inherit',
  height: 'inherit',
});

const TitleText = styled.header({
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  bottom: '50%',
  left: '7%',

  marginTop: `${- pageTitleHeight / 2}vw`,

  height: `${pageTitleHeight}vw`,

  lineHeight: `${pageTitleHeight}vw`,

  h1: {
    color: C.textWhite,
    fontWeight: 'bold',
    fontSize: C.fontGiantSize,
  },
});
