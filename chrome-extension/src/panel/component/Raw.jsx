import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
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
    <Highlight className="javascript">
      { JSON.stringify(manifest) }
    </Highlight>
  );
};

export default Code;
