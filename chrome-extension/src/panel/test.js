import remixManifest from './treeRender/mockData';

// console.log(remixManifest["root"])
function renderData(data) {
  // each route key is a string. use this string to build an object which can be used to render a list with each each route containing children which are their subroutes
  const routes = {};
  // add root as the first route
  routes['/'] = data['root'];
  // iterate over each route key
  for (const key in data) {
    // split each key in an array with path fragments
    const subroutes = key.split('/');
    const length = subroutes.length;
    // after splitting, recursively add the fragments in order as children to the parent route and each preceding fragment
    for (let i = 0; i < subroutes.length; i++) {
      // if the current subroute isnt the last, then check if the current route has a child
      if( i < length - 1) {
        if(!routes['children']) {
          routes['children'] = {};
        }

        if(!routes['children'][subroutes[i]]) {
          routes['children'][subroutes[i]] = {};
        }

        
      }
    }
  }
  return routes;
}

// console.log(renderData(remixManifest))
console.log(remixManifest);

console.log(renderData(remixManifest));
