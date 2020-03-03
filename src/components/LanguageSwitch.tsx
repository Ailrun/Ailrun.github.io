import styled from '@emotion/styled';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import React, { useCallback, useState } from 'react';

import * as C from '../styles/constants';
import { Language, languageToString, languages } from '../utils/languages';

interface Props {
  readonly className: string;
  readonly language: Language;
}
const LanguageSwitch: React.FC<Props> = ({ className, language }) => (
  <Root className={className}>
    <Hover language={language}>
      {languageToString(language)}
    </Hover>
  </Root>
);
export default LanguageSwitch;

const Root = styled.li({
  fontWeight: 'bold',
});

interface HoverProps {
  readonly language: Language;
}
const Hover: React.FC<HoverProps> = ({ children, language }) => {
  const [displayList, setDisplayList] = useState(false);
  const handleShowList = useCallback(() => {
    setDisplayList(true);
  }, []);
  const handleHideList = useCallback(() => {
    setDisplayList(false);
  }, []);

  return (
    <HoverRoot
      onMouseEnter={handleShowList}
      onMouseMove={handleShowList}
      onMouseLeave={handleHideList}
    >
      <LanguageListRoot asSelect={false}>
        {children}
      </LanguageListRoot>
      {
        displayList ?
          (
            <LanguageList language={language} />
          ) : null
      }
    </HoverRoot>
  );
};

const hoverWidth = '120px';

const HoverRoot = styled.div({
  display: 'inline-block',
  position: 'relative',

  width: hoverWidth,

  padding: '0 20px',

  verticalAlign: 'top',
});

interface LanguageListProps {
  readonly language: Language;
}
const LanguageList: React.FC<LanguageListProps> = ({ language }) => {
  const sortedLanguages = [
    language,
    ...languages.filter((a) => a !== language),
  ];

  return (
    <Location>
      {
        ({ location }): React.ReactChild => (
          <LanguageListRoot asSelect={true}>
            {
              sortedLanguages.map((lang) => {
                const Comp =
                  lang === language ?
                    LanguageDisabledLink :
                    LanguageLink;

                return (
                  <Comp
                    key={lang}
                    to={location.pathname.replace(/\/[^/]*/, '/' + lang)}
                  >
                    {languageToString(lang)}
                  </Comp>
                );
              })
            }
          </LanguageListRoot>
        )
      }
    </Location>
  );
};

interface LanguageListRootProps {
  readonly asSelect: boolean;
}
const LanguageListRoot = styled.div<LanguageListRootProps>({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,

  width: hoverWidth,

  textAlign: 'center',

  flexDirection: 'column',
}, ({ asSelect }) => asSelect ? ({
  top: '-1px',

  borderStyle: 'solid',
  borderColor: 'gray',
  borderWidth: '1px',
  borderRadius: '3px',

  background: 'black',
}) : ({
}));

const LanguageLink = styled(Link)({
  width: '100%',

  color: C.textLightWhite,
  userSelect: 'none',

  ':hover': {
    color: C.textWhite,
  },
});

const LanguageDisabledLink = styled(LanguageLink)({
  cursor: 'pointer',
}).withComponent('span');
