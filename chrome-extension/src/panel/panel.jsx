import React, { useEffect, useState } from "react";
import Tree from "../Tree.js" 
import List from "../List.js";
import './style.css'
import { useState } from "react";

export default () => {
	// let renderItem = <Tree />;
	const [comp, setComp] = useState(<Tree />)

	const changeTree = () => {
		setComp(<Tree />)
	}
	const changeList = () => {
		setComp(<List />)
	}

	return (
		<div>
			<div class="tabs">
				<button onClick={changeTree}>Tree</button>
				<button onClick={changeList}>List</button>
			</div>
			<div>
				{comp}
			</div>
			<div>
			</div>
		</div>
	)
}
// let data;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	data = JSON.parse(message);
// 	console.log('ran fr`om panel.js');
// 	const test = docume`nt.createElement('div');
// 	test.innerText = JSON.stringify(data);
// 	document.body.appendChild(test);
// })
