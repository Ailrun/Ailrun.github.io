import styled from '@emotion/styled';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import React, { useCallback, useState } from 'react';

import { Language, languageToString, languages } from '../languages';
import * as C from '../styles/constants';

interface Props {
  readonly className: string;
  readonly language: Language;
}
const LanguageSwitch: React.FC<Props> = ({ className, language }) => (
  <Wrapper className={className}>
    <Hover language={language}>
      {languageToString(language)}
    </Hover>
  </Wrapper>
);
export default LanguageSwitch;

const Wrapper = styled.li({
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
    <HoverWrapper
      onMouseEnter={handleShowList}
      onMouseMove={handleShowList}
      onMouseLeave={handleHideList}
    >
      <LanguageListWrapper asSelect={false}>
        {children}
      </LanguageListWrapper>
      {
        displayList ?
          (
            <LanguageList language={language} />
          ) : null
      }
    </HoverWrapper>
  );
};

const HoverWrapper = styled.div({
  display: 'inline-block',
  position: 'relative',

  width: '6vw',

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
          <LanguageListWrapper asSelect={true}>
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
          </LanguageListWrapper>
        )
      }
    </Location>
  )
};

interface LanguageListWrapperProps {
  readonly asSelect: boolean;
}
const LanguageListWrapper = styled.div<LanguageListWrapperProps>({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,

  width: '6vw',

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
