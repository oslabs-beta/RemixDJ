// declare injectable script as function
function injectScript(file, node) {
	var th = document.getElementsByTagName(node)[0];
	var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', file);
	th.appendChild(s);
}

// pass it through the chrome runtime API
// params = (file, node to append to)
injectScript(chrome.runtime.getURL('detect_remix.js'), 'body');

// listen for event from injected script
window.addEventListener("getRemixData", (e) => {
	// const port = chrome.runtime.connect({ name: "remixDJ" });
	// console.log('eventlistener')
	if (!e.detail) {
	} else {
		chrome.storage.local.set({ remixManifest: e.detail }).then(() => {
		});
		chrome.runtime.sendMessage(JSON.stringify({message: 'remixDetected'}))
		// chrome.runtime.sendMessage(JSON.stringify(e.detail), (res) => {
		// 	console.log('recieved page data: ', e.detail)
		// })
	}
		// chrome.runtime.sendMessage(JSON.stringify(e.detail), (res) => {
		// 	console.log('recieved page data: ', e.detail)
		// })
}, false)
