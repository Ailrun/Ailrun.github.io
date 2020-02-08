import { SerializedStyles, css } from '@emotion/core';

export const navigationBarHeight = '2.5vw';

export const fontSmallSize = '0.8vw';
export const fontBaseSize = '1vw';
export const fontLargeSize = '1.5vw';
export const fontHugeSize = '2vw';
export const fontGiantSize = '2.5vw';

export const textWhite = 'rgba(255, 255, 255, 0.84)';
export const textLightWhite = 'rgba(255, 255, 255, 0.73)';
export const textBlack = 'rgba(0, 0, 0, 0.84)';
export const textLightBlack = 'rgba(0, 0, 0, 0.73)';
export const textVeryLightBlack = 'rgba(0, 0, 0, 0.5)';

export const backgroundBlack = 'rgba(0, 0, 0, 0.73)';

export const fontDancing: SerializedStyles = css({
  fontFamily: '"Dancing Script", cursive',
});

export const markdown: SerializedStyles = css({
  color: textBlack,

  p: {
    fontSize: fontBaseSize,
  },
});
