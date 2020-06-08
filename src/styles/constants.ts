import { SerializedStyles, css } from '@emotion/core';

export const mediaQueries = [
  '@media (max-width: 60em)',
];

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
export const textVeryLightBlack = 'rgba(0, 0, 0, 0.6)';
export const textBrown = 'rgba(100, 50, 50, 0.84)';
export const textLightBrown = 'rgba(150, 80, 50, 0.84)';
export const textRed = 'rgba(108, 0, 0, 0.84)';
export const textLightRed = 'rgba(216, 0, 0, 0.84)';

export const backgroundBlack = 'rgba(0, 0, 0, 0.73)';
export const backgroundWhite = 'rgba(255, 255, 255, 0.73)';
export const backgroundGray = 'rgba(200, 200, 200, 0.73)';

export const fontDancing: SerializedStyles = css({
  fontFamily: '"Dancing Script", cursive',
});

export const markdown: SerializedStyles = css({
  color: textBlack,
  fontSize: '12pt',

  lineHeight: '1.7',

  'h1::before': {
    content: '"DON\'T USE THIS"',
  },

  'h2, h3, h4, h5, h6': {
    marginTop: '1em',
    marginBottom: '0.5em',
  },

  h2: {
    fontSize: '20pt',
  },

  h3: {
    fontSize: '18pt',
  },

  h4: {
    fontSize: '16pt',
  },

  p: {
    margin: '0 1em',
    marginTop: '1em',

    textIndent: '1em',
  },

  'ol, ul': {
    margin: '0 3em',
    marginTop: '1em',

    '> * > ol, > * > ul': {
      margin: '0',
      marginLeft: '0.5em',
    },

    '+ p': {
      textIndent: 0,
    },
  },

  li: {
    marginTop: '0.5em',
    marginLeft: '1em',

    '> p': {
      margin: 0,
    },

    '> p:first-of-type': {
      textIndent: 0,
    },

    '> .truth-table': {
      table: {
        margin: '1em 0',
      },
    },

    '> * > li': {
      marginTop: '0.1em',

      '> * > li': {
        marginTop: 0,
      },
    },
  },

  a: {
    color: textLightRed,

    ':hover': {
      textDecoration: 'underline',
    },

    ':visited': {
      color: textRed,
    },
  },

  code: {
    margin: '0 0.5ex',

    padding: '0 0.3em',

    overflow: 'none',

    backgroundColor: backgroundGray,
    borderRadius: '3px',

    whiteSpace: 'nowrap',

    fontFamily: 'monospace',
  },

  pre: {
    margin: '0 0.5ex',

    padding: '0 0.3em',

    backgroundColor: backgroundGray,
    borderRadius: '3px',

    '> code': {
      margin: 0,

      padding: 0,

      backgroundColor: 'initial',
      borderRadius: '0',
    },
  },

  blockquote: {
    margin: '1.5em 1.5em',

    color: textVeryLightBlack,

    '+ p': {
      textIndent: '0',
    },
  },

  'details.answer': {
    display: 'block',

    marginBottom: '0.5em',

    summary: {
      width: 'fit-content',

      cursor: 'pointer',
      userSelect: 'none',

      p: {
        display: 'inline',

        margin: 0,

        textIndent: 0,
      },

      'p:first-of-type': {
        marginTop: '-1.5em',
      },

      '+ p': {
        margin: 0,
        marginLeft: '1em',
      },

      '+ ol, + ul': {
        margin: '1em 1em',
      },
    },
  },

  '.truth-table': {
    table: {
      margin: '1em 3em',

      backgroundColor: backgroundWhite,
      borderCollapse: 'collapse',

      '> thead + tbody': {
        borderTopStyle: 'double',
      },

      '> * > tr': {
        '> th, > td': {
          padding: '0 0.5em',

          borderColor: textLightBlack,
          borderStyle: 'solid',
          borderWidth: '1px',

          textAlign: 'center',
        },
      },

      '+ p': {
        textIndent: 0,
      },
    },
  },

  'iframe[src^="/"]': {
    display: 'block',
    margin: '2em 10%',

    width: '80%',

    border: 'none',
  },
});
