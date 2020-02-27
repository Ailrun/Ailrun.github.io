import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Codemirror from 'codemirror';
import React, { useCallback, useEffect, useState, useRef } from 'react';

import { parse } from '../logic/parser';

export interface Props {
  readonly initialContent: string;
}
const PredicateLogic: React.FC<Props> = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent ?? '');
  const handleContentChange = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  return (
    <Wrapper>
      <EditablePanel
        initialContent={initialContent}
        onContentChange={handleContentChange}
      />
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

interface EditablePanelProps {
  readonly initialContent: string;
  onContentChange(newContent: string): void;
}
const EditablePanel: React.FC<EditablePanelProps> = ({ initialContent, onContentChange }) => {
  const editorRef = useRef<Codemirror.Editor>();
  const domRef = useRef<HTMLPreElement>(null);

  const updatePropNumber = useCallback((editor: Codemirror.Editor) => {
    let propNumber = 1;

    console.log(editor.getGutterElement());

    editor.eachLine((line) => {
      const propNumberElement = document.createElement('div');
      propNumberElement.className = 'CodeMirror-linenumber';

      if (editor.getLine(editor.getLineNumber(line)!) === '') {
        propNumberElement.innerHTML = ' ';
      } else {
        propNumberElement.innerHTML = String(propNumber);
        propNumber++;
      }

      editor.setGutterMarker(line, 'CodeMirror-linenumbers', propNumberElement);
    });
  }, []);

  useEffect(() => {
    if (domRef.current !== null) {
      console.log(initialContent);
      const editor = editorRef.current = Codemirror(domRef.current, {
        value: initialContent,
        mode: null,
        lineNumbers: true,
      });
      editor.refresh();

      updatePropNumber(editor);
      onContentChange(initialContent);
      editor.on('change', (eventEditor) => {
        updatePropNumber(eventEditor);
        onContentChange(eventEditor.getValue());
      });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <EditablePanelWrapper ref={domRef} />
      <Global styles={editablePanelStyle} />
    </>
  );
};

const EditablePanelWrapper = styled.pre({
  display: 'block',
  alignSelf: 'stretch',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',
});

const editablePanelStyle = css({
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [EditablePanelWrapper as any]: {
    '.CodeMirror': {
      height: '100%',

      backgroundColor: 'rgba(0,0,0,0)',
    },

    '.CodeMirror-gutters': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
  },
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
