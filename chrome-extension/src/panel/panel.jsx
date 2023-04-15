import React, { useEffect, useState } from 'react';
import NoRemix from '../NoRemix/NoRemix.js';
import List from './component/List';
import Tree from './component/Tree';
import './styles/style.css';

export default () => {
  const [comp, setComp] = useState(<Tree />);
  const [mainComp, setMainComp] = useState();
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await chrome.storage.local.get(['remixManifest']).then((res) => {
        setContent(res);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (
      !loading &&
      content &&
      content.remixManifest &&
      content.remixManifest.routes
    ) {
      setMainComp(
        <div>
          <div className='tabs'>
            <button onClick={changeTree}>Tree</button>
            <button onClick={changeList}>List</button>
          </div>
          <div>{comp}</div>
          <div></div>
        </div>
      );
    } else {
      setMainComp(
        <div>
          <NoRemix />
        </div>
      );
    }
  }, [loading, content, comp]);

  const changeTree = () => {
    setComp(<Tree />);
  };
  const changeList = () => {
    setComp(<List />);
  };

  return <div>{mainComp}</div>;
};
