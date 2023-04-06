// This function transforms the data pulled from the window.__remixManifest object into a nested object of parent and child nodes
export default function parseData(remixManifest) {

    // This function is used in the 'keySplitter' function below to re-join array elements with opening & closing brackets
    function joiner(arrOfStrings, char, i = 0) {

        if (i === arrOfStrings.length) return arrOfStrings

        let temp = ''
        let currentEl = arrOfStrings[i];
        let nextEl = arrOfStrings[i + 1];

        if (currentEl[currentEl.length - 1] === '[') {
            temp += (currentEl + char + nextEl);
            arrOfStrings.splice(i, 2, temp)
            return joiner(arrOfStrings, char, i);
        }

        else return joiner(arrOfStrings, char, i += 1);
    }

    // This function generates an array of arrays, with each subarray containing routes broken up with '.' or '/' (outside of []'s)
    function keySplitter(remixManifest) {

        let myKeys = [];
        for (const key in remixManifest) {
            if (key != 'root') {

                // For keys without escape brackets, split by '.' or '/' and push into myKeys array
                if (!key.includes('[')) {
                    myKeys.push(key.split(/[/.]/))
                }

                // For keys with escape brackets:
                if (key.includes('[')) {
                    // Split by dot to account for potentially non-escaped dots
                    if (key.includes('.')) { }
                    let splitKeyDot = key.split('.')
                    // Re-join with joiner function
                    splitKeyDot = joiner(splitKeyDot, '.');
                    // After splitting and re-joining by dots, do the same for slashes
                    const holder = [];
                    splitKeyDot.forEach((el) => {
                        if (!el.includes('/')) {
                            holder.push(el);
                        } if (el.includes('/')) {
                            let splitKeySlash = el.split('/')
                            splitKeySlash = joiner(splitKeySlash, '/')
                            holder.push(...splitKeySlash)
                        }
                    })
                    myKeys.push(holder);
                }
            }
        }
        return myKeys;
    }

    const myKeys = keySplitter(remixManifest);

    // The newObj will contain all of our routes. Starts with a root node which has a child array for additional routes
    let newObj = {
        'name': 'root',
        'children': [],
        'max': 0,
        'widthSet': 1,
    }

    // cache for color assignment to each node. colors are matched to the remix.run website color scheme. 
    const colors = {
        0: 'rgb(225, 81, 86)', // red
        1: 'rgb(246, 206, 75)', // yellow
        2: 'rgb(135, 214, 117)', // green
        3: 'rgb(121, 236, 232)', // turequoise
        4: 'rgb(82, 144, 247)', // dark blue
        5: 'rgb(199, 72, 204)', // magenta
        6: 'rgb(230, 134, 149)', // lt pink
        7: 'rgb(224, 92, 115)', // dk pink
    }

    for (let i = 0; i < myKeys.length; i++) {
        let pathString = newObj.children;
        for (let j = 0; j < myKeys[i].length; j++) {
            let path = pathString;
            newObj.widthSet = j;
            if (!(path.find(e => e.name === myKeys[i][j]))) {
                path.push({ 'name': myKeys[i][j], 'children': [], level: (colors[j % 8]) });
            }
            let numbah;
            newObj.max = Math.max(newObj.max, path.length)
            for (let k = 0; k < path.length; k++) {
                if (path[k].name === myKeys[i][j]) {
                    numbah = k;
                }
            }
            pathString = pathString[numbah]['children'];
        }
    }
    const treeData = newObj;
    return treeData
}