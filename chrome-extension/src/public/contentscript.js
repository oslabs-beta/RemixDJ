// declare injectable script as function
// function injectScript(file, node) {
// 	var th = document.getElementsByTagName(node)[0];
// 	var s = document.createElement('script');
// 	s.setAttribute('type', 'text/javascript');
// 	s.setAttribute('src', file);
// 	th.appendChild(s);
// }

// pass it through the chrome runtime API
// params = (file, node to append to)
// injectScript(chrome.runtime.getURL('detect_remix.js'), 'body');

// proposed change
const node = document.getElementsByTagName(node)[0];
const script = document.createElement('script');
script.setAttribute('src', chrome.runtime.getURL('detect_remix.js'));
script.setAttribute('type', 'text/javascript');
node.appendChild(script);

// listen for event from injected script
window.addEventListener("getRemixData", (e) => {
	// const port = chrome.runtime.connect({ name: "remixDJ" });
	// console.log('eventlistener')
	chrome.runtime.sendMessage(JSON.stringify(e.detail), (res) => {
		console.log('recieved user data', res)
	})
}, false)
