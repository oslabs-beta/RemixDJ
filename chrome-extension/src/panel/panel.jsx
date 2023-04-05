import React, { useEffect, useState } from "react";
import Tree from "../Tree.js"

// let data;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	data = JSON.parse(message);
// 	console.log('ran from panel.js');
// 	const test = document.createElement('div');
// 	test.innerText = JSON.stringify(data);
// 	document.body.appendChild(test);
// })

export default () => {

	const [flag, setFlag] = useState(true);


	// useEffect(() => {
	// }, [])

	const handleClick = () => {
		setFlag(!flag)
	}

	return (
		<div>
			<div>{`hi`}</div>
			<Tree />
			<button color='white' onClick={handleClick}>Click</button>
		</div>
	)
}
