export default function routeLayouts(remixManifest) {
  let routesObj = remixManifest.routes;
  // This makes an array of arrays of the keys of the remixManifest broken up into an array based off splitting it up
  // Wherever a '/' is (AKA splitting it by the path). Will reformat this in a bit to work with v2 of remix and all the
  // other route naming conventions
  let myKeys = [];
  for (const key in routesObj) {
    // Root is omitted as root exists in all projects and will be hard coded into tree object
    if (key !== 'root') {
      myKeys.push(key.split(/[/.]/));
    }
  }

  // The newObj which will contain all of our routes. Starts with a root which has children which will house the routes.
  let newObj = {
    name: 'root',
    children: [],
  };

  // cache for colors:
  const colors = {
    0: 'rgb(224, 92, 115)',
    1: 'rgb(225, 81, 86)', // red
    2: 'orange',
    3: 'rgb(246, 206, 75)', // yellow
    4: 'rgb(135, 214, 117)', // green
    5: 'rgb(121, 236, 232)', // blue
    6: 'rgb(82, 144, 247)', // dark blue
    7: 'rgb(199, 72, 204)', // violet
  };

  for (let i = 0; i < myKeys.length; i++) {
    // Whenever we go to a new path we start by parsing through the roots children and go deeper when we need to
    // This is just a string now so it can be manipulated easily later
    let pathString = 'newObj.children';
    for (let j = 0; j < myKeys[i].length; j++) {
      // Now we evaluate the pathString as an actual JS command with eval
      let path = pathString;

      // This checks if in the current path there is an object with a name key with the value of the current route we are on
      // If this is not true we then push the object to the current childrens array
      if (!path.find((e) => e.name === myKeys[i][j])) {
        if (myKeys[i][j].slice(-1) === '_') {
          newObj.children.push({
            name: myKeys[i][j],
            level: colors[0],
            children: [],
          });
        } else {
          path.push({
            name: myKeys[i][j],
            level: colors[j % 8],
            children: [],
          });
        }
      }
      // We then check where in the current children array the object with the path we are on is
      // We save that in numbah!
      let numbah;
      for (let k = 0; k < path.length; k++) {
        if (path[k].name === myKeys[i][j]) {
          numbah = k;
          // Then using numbah and some string manipulation we go deeper into the object by adding that numbah and the .children notation
          // So that when we go back through the second loop again we are now one deeper into it which is what we want.
          pathString = pathString[numbah][children];
        }
      }
    }
  }
  return newObj;
}
