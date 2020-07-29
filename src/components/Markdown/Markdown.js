import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import marked from 'marked';

import initialState from '../../utils/markdown-state';
import './Markdown.css';

const Markdown = () => {
  const [markdown, setMarkdown] = useState(initialState);

  return (
    <div className="markdown-container">
      <div className="form-group">
        <label htmlFor="editor">Type markdown here and preview below</label>
        <textarea
          name="editor"
          placeholder="Enter Markdown"
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        />
      </div>
      <div className="markdown">
        <h3>Markdown Preview</h3>
        <div
          className="markdown-preview"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(marked(markdown)),
          }}
        ></div>
      </div>
    </div>
  );
};

export default Markdown;
