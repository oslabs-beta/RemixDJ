import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/atom-one-light.css';
import { useEffect, useState } from 'react';
import '../styles/Raw.css';


const Raw = ({ manifest }) => {
  // state stores the manifest after being highlighted
  const [parsedManifest, setParsedManifest] = useState('');
  useEffect(() => {
    hljs.registerLanguage('json', json);
    setParsedManifest(hljs.highlight('json', JSON.stringify(manifest, null, 2)).value);
  }, [manifest]);

  return (
    <div id='rawCodeBox'>
      <code>
        <pre dangerouslySetInnerHTML={{ __html: parsedManifest }} />
      </code>
    </div>
  );
};

export default Raw;
