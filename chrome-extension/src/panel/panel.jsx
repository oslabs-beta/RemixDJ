import React from "react";
import Tree from "../Tree.js" 

export default () => {
	return (
		<div>
			<Tree/>
		</div>
	)
}
// let data;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	data = JSON.parse(message);
// 	console.log('ran from panel.js');
// 	const test = document.createElement('div');
// 	test.innerText = JSON.stringify(data);
// 	document.body.appendChild(test);
// })
