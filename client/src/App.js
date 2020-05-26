/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
// import 'highlight.js/styles/github.css';
import * as marked from 'marked';
import { useEffect, useState } from 'react';
import * as myMarkdownFile from './../README.md';

hljs.configure({ useBR: true });

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

const App = () => {
  const [text, setText] = useState('');
  const __html = marked(text);

  useEffect(() => {
    fetch(myMarkdownFile)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
        // document.querySelectorAll('pre code').forEach((block) => {
        //     hljs.highlightBlock(block);
        // });
      });
  }, []);

  return (
    <section
      css={css`
        box-sizing: border-box;
        display: flex;
        height: 100vh;
        justify-content: space-evenly;
        align-items: stretch;
        padding: 10px;
      `}
    >
      {/* <textarea
        css={css`
          width: 45%;
        `}
        onChange={(e) => setText(e.target.value)}
        value={text}
      /> */}

      <div
        css={css`
          width: 90%;
          /* border: 1px solid #ccc; */
        `}
        dangerouslySetInnerHTML={{ __html }}
      />
    </section>
  );
};

export default App;
