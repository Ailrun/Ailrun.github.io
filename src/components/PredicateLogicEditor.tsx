import styled from '@emotion/styled';
import Codemirror from 'codemirror';
import React, { useCallback, useEffect, useRef } from 'react';

export interface Props {
  readonly initialContent: string;
  onContentChange(newContent: string): void;
}
const PredicateLogicEditor: React.FC<Props> = ({ initialContent, onContentChange }) => {
  const domRef = useRef<HTMLPreElement>(null);

  const updatePropNumber = useCallback((editor: Codemirror.Editor) => {
    let propNumber = 1;

    editor.eachLine((line) => {
      const propNumberElement = document.createElement('div');
      propNumberElement.className = 'CodeMirror-linenumber';

      const lineNumber = editor.getLineNumber(line);
      if (lineNumber !== null && editor.getLine(lineNumber) !== '') {
        propNumberElement.innerHTML = String(propNumber);
        propNumber++;
      } else {
        propNumberElement.innerHTML = ' ';
      }

      editor.setGutterMarker(line, 'CodeMirror-linenumbers', propNumberElement);
    });
  }, []);

  useEffect(() => {
    if (domRef.current !== null) {
      const editor = Codemirror(domRef.current, {
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
    /* This hook should be executed at most once */
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <PredicateLogicEditorWrapper ref={domRef} />
  );
};
export default PredicateLogicEditor;

const PredicateLogicEditorWrapper = styled.pre({
  display: 'block',
  alignSelf: 'stretch',

  flexBasis: '50%',
  flexShrink: 1,
  flexGrow: 0,
  minHeight: '1em',

  '.CodeMirror': {
    height: '100%',

    backgroundColor: 'rgba(0,0,0,0)',
  },

  '.CodeMirror-gutters': {
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
