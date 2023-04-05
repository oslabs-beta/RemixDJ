import React, { useEffect, useState } from "react";
import List from "./component/List";
import Tree from "./component/Tree";
import './styles/style.css';
import NoRemix from '../NoRemix/NoRemix.js';

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
// let data;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	data = JSON.parse(message);
// 	console.log('ran fr`om panel.js');
// 	const test = docume`nt.createElement('div');
// 	test.innerText = JSON.stringify(data);
// 	document.body.appendChild(test);
// })
