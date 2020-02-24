import styled from '@emotion/styled';
import React, { Fragment, useCallback, useEffect, useState, useRef } from 'react';
/* eslint-disable-next-line import/extensions */
import { renderToStaticMarkup } from 'react-dom/server';

import { parse } from '../logic/parser';
import * as C from '../styles/constants';

export interface Props {
  readonly initialContent?: string;
}
const PredicateLogic: React.FC<Props> = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent ?? '');
  const handleContentChange = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  return (
    <Wrapper>
      <LineNumbersPanel content={content} />
      {
        initialContent !== undefined ? (
          <EditablePanel
            initialContent={initialContent}
            onContentChange={handleContentChange}
          />
        ) : <EditablePanelWrapper />
      }
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

  alignItems: 'flex-start',
});

interface LineNumbersPanelProps {
  readonly content: string;
}
const LineNumbersPanel: React.FC<LineNumbersPanelProps> = ({ content }) => {
  const lineNumbers = content.split('\n')
    .reduce<[number, React.ReactChild[]]>(([ind, acc], line, index) => [
      line !== '' ? ind + 1 : ind,
      [
        ...acc,
        (
          <LineNumber key={index}>
            {line !== '' ? ind : (<br />)}
          </LineNumber>
        ),
      ],
    ], [1, []])[1];

  return (
    <LineNumbersPanelWrapper>
      {lineNumbers}
    </LineNumbersPanelWrapper>
  );
};

const LineNumbersPanelWrapper = styled.pre({
  marginRight: '0.5em',

  minWidth: '1em',

  paddingRight: '0.5em',

  borderRightStyle: 'solid',
  borderRightWidth: '1px',
  borderRightColor: C.textVeryLightBlack,
});

const LineNumber = styled.div({
  display: 'block',
});

interface EditablePanelProps {
  readonly initialContent: string;
  onContentChange(newContent: string): void;
}
const EditablePanel: React.FC<EditablePanelProps> = ({ initialContent, onContentChange }) => {
  const ref = useRef<HTMLPreElement>(null);
  const handleInput = useCallback((): void => {
    if (ref.current !== null) {
      onContentChange(targetToContent(ref.current));
    }
  }, [onContentChange]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.innerHTML = renderToStaticMarkup(
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        contentToChildren(initialContent) as any
      );

      onContentChange(targetToContent(ref.current));
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <EditablePanelWrapper
      contentEditable={true}
      onInput={handleInput}
      ref={ref}
    />
  );
};

const EditablePanelWrapper = styled.pre({
  display: 'block',
  alignSelf: 'stretch',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',

  outline: 'none',

  whiteSpace: 'pre-wrap',
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
  alignSelf: 'stretch',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',

  overflowY: 'scroll',

  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
});


const targetToContent = (target: Element): string => {
  return Array.from(target.childNodes)
    .map((childNode, index) => {
      if (childNode.nodeType === childNode.ELEMENT_NODE
          && (childNode as Element).tagName === 'BR'
          && index !== target.childNodes.length - 1) {
        return '\n';
      }

      return childNode.textContent;
    })
    .join('');
};

const contentToChildren = (content: string): React.ReactNode => {
  return content.split('\n')
    .map((frag, index) => (
      <Fragment key={index}>
        {frag}
        <br />
      </Fragment>
    ));
};
