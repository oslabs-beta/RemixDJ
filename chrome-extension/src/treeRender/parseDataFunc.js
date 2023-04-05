
export default function parseData(remixManifest) {
    console.log('parseDataRun', remixManifest)
    let myKeys = [];
    for (const key in remixManifest) {
        // Root is omitted as root exists in all projects and will be hard coded into tree object
        if (key !== 'root') {
            myKeys.push(key.split(/[/.]/));
        }
    }

    // The newObj which will contain all of our routes. Starts with a root which has children which will house the routes.
    let newObj = {
        'name': 'root',
        'children': []
    }

    // cache for colors:
    const colors = {
        0: 'rgb(225, 81, 86)', // red
        1: 'rgb(246, 206, 75)', // yellow
        2: 'rgb(135, 214, 117)', // greene
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
            if (!(path.find(e => e.name === myKeys[i][j]))) {
                path.push({ 'name': myKeys[i][j], 'children': [], level: (colors[j % 8]) });
            }
            let numbah;
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




