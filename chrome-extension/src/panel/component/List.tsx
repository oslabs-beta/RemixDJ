import React, { useEffect, useState } from "react";

function List() {
  const [manifest, setManifest] = useState({});
  useEffect(() => {
    async function fetchData() {
    // getting data from chrome localstorage
    await chrome.storage.local.get(["remixManifest"]).then(res => {
      setManifest(res.remixManifest);
    })
  }
  fetchData();
  }, [])
  // recursively render the data in a collapsible list
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details 
  const renderData = (data: string | boolean| {[key: string]: any}) => {
    if( typeof data === 'string' ) {
      return <li>{data}</li>
    }
    if( typeof data === 'boolean' ) {
      return <li>{ data ? 'true' : 'false' }</li>
    }
    if( typeof data === 'object' ) {
      return Object.keys(data).map( (key) => {
        return (
          <li key={key}>
            <details>
              <summary>{key}</summary>
              <ul>
                {renderData(data[key])} 
              </ul>
            </details>
          </li>
        )
      })
    }
  }
  return (
    <div>
      <br></br>
      <span id="listData"> { renderData(manifest) } </span>
    </div>
  )
}

export default List;
