import React, { useState } from 'react';
import remixManifest from '../treeRender/mockData';

function List() {
  const [manifest, setManifest] = useState(remixManifest);

  // useEffect(() => {
  //   async function fetchData() {
  //     // getting data from chrome localstorage
  //     const result = await chrome.storage.local.get(['remixManifest']);
  //     setManifest(result.remixManifest);
  //   }

  //   fetchData();
  // }, []);

  // recursively render the data in a collapsible list
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details 
  const renderData = (data) => {
    // each route key is a string. use this string to build an object which can be used to render a list with each each route containing children which are their subroutes
    const routes = {};
    // add root as the first route
    routes['/'] = data['root'];
    // iterate over each route key
    for (const key in data) {
      // split each key in an array with path fragments
      const subroutes = key.split('/');
      const length = subroutes.length;
      // iterate over the subroutes and check the routes to check each route has a child with the current subroute.
      // if not, then add the current subroute as a child else check the next subroute
      for (let i = 0; i < subroutes.length; i++) {
        // if the current subroute is not the last subroute, then check if the current subroute is a child of the current route
        if (i < length) {
          if(!routes['children'] || !routes['children'][subroutes[i]] ) {
            routes['children'][subroutes[i]] = {};
          }
        }
        // if the current subroute is the last subroute, then add the current subroute as a child of the current route
        else {
          routes['children'][subroutes[i]] = data[key];
        }
      }
    }
    // recursively render properties in data as a list, with each property containing children which are their subproperties
    const renderRoutes = routes => {
      for(const [key, value] of Object.entries(routes)){
        if (key === 'children' && value.length !== 0) {
          // if there's children then recursively render children under the parent.
          return (
            <li key={key}> { key } </li>
          );
        }
      }
    };
  };
  
  console.log(renderData(manifest));

  return (
    <div>
      <h1> List </h1>
      
      {/* <span id="listData"> { renderData(manifest) } </span> */}
    </div>
  );
}

export default List;
