import React, { useEffect, useState } from 'react';
import ReactJsonBeautify from 'react-json-beautify';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import parseData from '../treeRender/parseDataFunc';

const Code = () => {
  const [manifest, setManifest] = useState({});
  const [parsedManifest, setParsedManifest] = useState({});
  useEffect(() => {
    async function fetchData() {
      // getting data from chrome localstorage
      const response = await chrome.storage.local.get(['remixManifest']);
      setManifest(response.remixManifest);
      setParsedManifest(parseData(response.remixManifest.routes));
    }
    fetchData();
  });

  return (
    <div id="codeView">
      
    </div>
  );
};

export default Code;
