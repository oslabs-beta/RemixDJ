import React, { useEffect, useState } from "react";
import List from "./component/List";
import Tree from "./component/Tree";
import './styles/style.css';
import NoRemix from '../NoRemix/NoRemix';

interface manifestObj{name: string, max: number, widthSet: number, level: string, children: null| manifestObj[], x: number, y: number};
interface windowObj{remixManifest: {routes: manifestObj}}
export default () => {
  const [comp, setComp] = useState<JSX.Element>(<Tree />);
  const [mainComp, setMainComp] = useState<JSX.Element | null>(null);
  const [content, setContent] = useState<windowObj | null | Record<string, never>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await chrome.storage.local.get(['remixManifest']).then((res: windowObj) => {
        console.log('res in panel', res);
        setContent(res);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(content);
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