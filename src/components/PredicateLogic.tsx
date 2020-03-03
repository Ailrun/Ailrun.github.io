import styled from '@emotion/styled';
import React, { Suspense, lazy, useCallback, useState } from 'react';

import { parse } from '../utils/logic/parser';

const PredicateLogicEditor = lazy(async () => import('./PredicateLogicEditor'));

export interface Props {
  readonly initialContent: string;
}
const PredicateLogic: React.FC<Props> = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent);
  const handleContentChange = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  return (
    <Wrapper>
      <Suspense fallback={<PredicateLogicEditorPlaceholder />}>
        <PredicateLogicEditor
          initialContent={initialContent}
          onContentChange={handleContentChange}
        />
      </Suspense>
      <ResultPanel content={content} />
    </Wrapper>
  );
};
export default PredicateLogic;

const Wrapper = styled.div({
  display: 'flex',

  width: '100vw',
  height: '100vh',
  minHeight: '1em',

  alignItems: 'stretch',
});

const PredicateLogicEditorPlaceholder = styled.pre({
  display: 'block',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',
});

interface ResultPanelProps {
  readonly content: string;
}
const ResultPanel: React.FC<ResultPanelProps> = ({ content }) => {
  const parseResult = parse(content);

  if (parseResult instanceof Error) {
    return (
      <ResultPanelWrapper>
        {parseResult.message}
      </ResultPanelWrapper>
    );
  }

  return (
    <ResultPanelWrapper>
      {JSON.stringify(parseResult, undefined, 2)}
    </ResultPanelWrapper>
  );
};

const ResultPanelWrapper = styled.div({
  display: 'block',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',

  overflowY: 'scroll',

  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
});
