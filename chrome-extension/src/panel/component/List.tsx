import React, { useEffect, useState } from 'react';
import '../styles/List.css';
import remixManifest from '../treeRender/mockData';
import parseData from '../treeRender/parseDataFunc';
import { manifestObj, dataType, parseObj } from '../../types';


function List() {
  const [manifest, setManifest] = useState<{routes: manifestObj} | null | Record<string, never>>({});
  useEffect(() => {
    async function fetchData() {
    // getting data from chrome localstorage
      await chrome.storage.local.get(['remixManifest'])
      .then(res => {
        setManifest(res.remixManifest);
      });
    }
    fetchData();
  }, []);
  // recursively render the data in a collapsible list
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details 
  // const renderData = (data) => {
  //   if( typeof data === 'string' ) {
  //     return <li>{data}</li>;
  //   }
  //   if( typeof data === 'boolean' ) {
  //     return <li>{ data ? 'true' : 'false' }</li>;
  //   }
  //   if( typeof data === 'object' ) {
  //     return Object.keys(data).map( (key) => {
  //       return (
  //         <li key={key}>
  //           <details>
  //             <summary>{key}</summary>
  //             <ul>
  //               {renderData(data[key])} 
  //             </ul>
  //           </details>
  //         </li>
  //       );
  //     });
  //   }
  // };

  const data: parseObj = parseData(manifest.routes);
  console.log(data);
  function renderData(data: parseObj){
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
    <div id="listContainer">
      <span id="listData"> 
        { renderData(data) }
      </span>
    </div>
  );
}

export default List;