import { useEffect, useState } from 'react';
import NoRemix from '../NoRemix/NoRemix';
import { windowObj } from '../types.js';
import List from './component/List';
import Raw from './component/Raw';
import Tree from './component/Tree';
import './styles/style.css';
import URLParse from './treeRender/URLParse';
import layoutParse from './treeRender/layoutParse';
import parseData from './treeRender/parseDataFunc';



export default () : JSX.Element => {
  const [comp, setComp] = useState(<NoRemix /> );
  const [mainComp, setMainComp] = useState<JSX.Element | null>(null);
  const [content, setContent] = useState<windowObj | null | Record<string, never>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await chrome.storage.local.get(['remixManifest'])
      .then((res: windowObj) => {
        setContent(res);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (
      // check if manifest has been loaded
      !loading &&
      // check if manifest is not empty
      content &&
      content.remixManifest &&
      content.remixManifest.routes
    ) {
      setMainComp(
        <div>
          <div className='tabs'>
            <button onClick={changeURLTree}>URL Tree</button>
            <button onClick={changeLayoutTree}>Layout Tree</button>
            <button onClick={changeTree}>Tree</button>
            <button onClick={changeList}>List</button>
            <button onClick={changeRaw}>Raw</button>
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

  const changeURLTree = () => {
    const data = URLParse(content.remixManifest.routes);
    setComp(<Tree treeData={ data } type="URL" />);
  };
  const changeTree = () => {
    const data = parseData(content.remixManifest.routes);
    setComp(<Tree  treeData={ data } type="TREE" />);
  };
  const changeLayoutTree = () => {
    const data = layoutParse(content.remixManifest.routes);
    setComp(<Tree treeData={ data } type = "LAYOUT" />);
  };
  const changeList = () => {
    setComp(<List manifest={ content.remixManifest.routes } />);
  };
  const changeRaw = () => {
    setComp(<Raw manifest={ content } />);
  };

  return <div>{ mainComp }</div>;
};
