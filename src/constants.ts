import { SerializedStyles, css } from '@emotion/core';

export const navigationBarHeight: string = '2.5vw';

export const fontBaseSize: string = '1vw';
export const fontLargeSize: string = '1.5vw';
export const fontHugeSize: string = '2vw';
export const fontGiantSize: string = '2.5vw';

export const textWhite: string = 'rgba(255, 255, 255, 0.84)';
export const textBlack: string = 'rgba(0, 0, 0, 0.84)';
export const textLightBlack: string = 'rgba(0, 0, 0, 0.73)';

export const backgroundBlack: string = 'rgba(0, 0, 0, 0.73)';

export const fontDancing: SerializedStyles = css({
  fontFamily: '"Dancing Script", cursive',
});

export const markdown: SerializedStyles = css({
  color: textBlack,

  p: {
    fontSize: fontBaseSize,
  },
});
