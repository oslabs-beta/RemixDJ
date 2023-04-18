import { parseObj } from '../../types';
// This function transforms the data pulled from the window.__remixManifest object into a nested object of parent and child nodes
export default function layoutParse(remixManifest: parseObj) {

  // This function is used in the 'keySplitter' function below to re-join array elements with opening & closing brackets
function joiner(arrOfStrings, char, i = 0) {
  const result = [...arrOfStrings];
  const currentEl = arrOfStrings[i];
  const nextEl = arrOfStrings[i + 1];
  const temp = currentEl.endsWith('[') ? currentEl + char + nextEl : currentEl;
  result.splice(i, currentEl.endsWith('[') ? 2 : 1, temp);
  return i === arrOfStrings.length ? result : joiner(result, char, i + 1);
}


  // This function generates an array of arrays, with each subarray containing routes broken up with '.' or '/' (outside of []'s)
function keySplitter(remixManifest) {
  const myKeys = [];
  for (const key in remixManifest) {
    if (key !== 'root') {
      const segments = key.split(/[./]/);
      const holder = [];
      let current = '';
      for (const segment of segments) {
        if (segment.endsWith('[')) {
          current = segment;
        } else if (segment.endsWith(']')) {
          current += segment;
          holder.push(current);
          current = '';
        } else if (current) {
          current += `.${segment}`;
        } else {
          holder.push(segment);
        }
      }
      myKeys.push(holder);
    }
  }
  return myKeys;
}


  const myKeys = keySplitter(remixManifest);

  // The newObj will contain all of our routes. Starts with a root node which has a child array for additional routes
  const newObj: parseObj = {
    'name': 'root',
    'children': [],
    'max': 0,
    'widthSet': 1,
    'level': null
  };

  // cache for color assignment to each node. colors are matched to the remix.run website color scheme. 
  const colors: {[key: string]: string} = {
    0: 'rgb(225, 81, 86)', // red
    1: 'rgb(246, 206, 75)', // yellow
    2: 'rgb(135, 214, 117)', // green
    3: 'rgb(121, 236, 232)', // turequoise
    4: 'rgb(82, 144, 247)', // dark blue
    5: 'rgb(199, 72, 204)', // magenta
    6: 'rgb(230, 134, 149)', // lt pink
    7: 'rgb(224, 92, 115)', // dk pink
  };

  for (let i = 0; i < myKeys.length; i++) {
    let pathString = newObj.children;
    for (let j = 0; j < myKeys[i].length; j++) {
      const path = pathString;
      newObj.widthSet = j;
      if (!(path.find(e => e.name === myKeys[i][j]))) {
        if (myKeys[i][j].slice(-1) !== '_') {
          path.push({ 'name': myKeys[i][j], 'children': [], level: (colors[j % 8]) });
        }
      }
      let numbah;
      newObj.max = Math.max(newObj.max, path.length);
      for (let k = 0; k < path.length; k++) {
        if (path[k].name === myKeys[i][j]) {
          numbah = k;
        }
      }
      pathString = pathString[numbah]['children'];
    }
  }
  const treeData = newObj;
  return treeData;
}
