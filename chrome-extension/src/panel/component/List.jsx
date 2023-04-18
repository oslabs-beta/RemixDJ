import React, { useEffect, useState } from 'react';
import '../styles/List.css';
import parseData from '../treeRender/parseDataFunc';

function List() {
  const [manifest, setManifest] = useState({});
  useEffect(() => {
    async function fetchData() {
    // getting data from chrome localstorage
      const data = await chrome.storage.local.get(['remixManifest']);
      setManifest(data.remixManifest);
    }
    fetchData();
  }, []);


  const data  = parseData(manifest.routes);
  console.log('LIST', data);
  function renderData(data){
    // recurse through the object and take each name and make it a summary element
    // then recurse through the children and for each element take the name property and make it a child of the parent

    if(!data.children || data.children.length === 0){
      return <li>{data.name}</li>;
    }

    return (
      <ul>
        <details>
          <summary>{data.name}</summary>
          { data.children.map((child) => { 
              return renderData(child);
            })
          }
        </details>
      </ul>
    );
  }
  
  return (
    <>
      <div id="listContainer">
        <span id="listData"> 
          { renderData(data) }
        </span>
      </div>
    </>
  );
}

export default List;
