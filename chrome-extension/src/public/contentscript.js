window.addEventListener("DOMContentLoaded", () => {
	// declare injectable script as function
	const node = document.getElementsByTagName(node)[0];
	// defining the script node
	const script = document.createElement('script');
	script.src = chrome.runtime.getURL('detect_remix.js');
	script.setAttribute('type', 'text/javascript');
	// adding the node to the dom
	node.appendChild(s);
});



// listen for event from injected script
window.addEventListener("RemixData", (e) => {
	// const port = chrome.runtime.connect({ name: "remixDJ" });
	// console.log('eventlistener')
	// once the event is recieved, callback will send a message to the background script
	chrome.runtime.sendMessage(JSON.stringify(e.detail), (response) => {
		console.log('recieved user data', response)
	})
}, false)
