import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/atom-one-light.css';
import React, { useEffect, useState } from 'react';
import '../styles/Raw.css';


const Raw = () => {
  const [parsedManifest, setParsedManifest] = useState('');
  useEffect(() => {
    hljs.registerLanguage('json', json);
    async function fetchData() {
      const response = await chrome.storage.local.get(['remixManifest']);
      setParsedManifest(hljs.highlight('json', JSON.stringify(response, null, 2)).value);
    }
    fetchData();
  });

  return (
    <div id='rawCodeBox'>
      <code>
        <pre dangerouslySetInnerHTML={{ __html: parsedManifest }} />
      </code>
    </div>
  );
};

export default Raw;
