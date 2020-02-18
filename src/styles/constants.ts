import { SerializedStyles, css } from '@emotion/core';

export const navigationBarHeight = '42px';

export const fontSmallSize = '10pt';
export const fontBaseSize = '12pt';
export const fontLargeSize = '18pt';
export const fontHugeSize = '24pt';
export const fontGiantSize = '30pt';

export const textWhite = 'rgba(255, 255, 255, 0.84)';
export const textLightWhite = 'rgba(255, 255, 255, 0.73)';
export const textBlack = 'rgba(0, 0, 0, 0.84)';
export const textLightBlack = 'rgba(0, 0, 0, 0.73)';
export const textVeryLightBlack = 'rgba(0, 0, 0, 0.5)';
export const textBrown = 'rgba(100, 50, 50, 0.84)';
export const textLightBrown = 'rgba(150, 80, 50, 0.84)';

export const backgroundBlack = 'rgba(0, 0, 0, 0.73)';

export const fontDancing: SerializedStyles = css({
  fontFamily: '"Dancing Script", cursive',
});

export const markdown: SerializedStyles = css({
  color: textBlack,

  h1: {
    marginTop: '1em',
    marginBottom: '0.5em',

    fontSize: '18pt',
  },

  p: {
    margin: '0 1em',
    marginTop: '1em',

    fontSize: '12pt',
    textIndent: '1em',
  },

  a: {
    color: textLightBrown,

    ':hover': {
      textDecoration: 'underline',
    },

    ':visited': {
      color: textBrown,
    },
  },

  blockquote: {
    margin: '2em 1.5em',

    fontSize: '10pt',
    color: textVeryLightBlack,
  },
});
