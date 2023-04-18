function injectScript(file, node) {
	var th = document.getElementsByTagName(node)[0];
	var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', file);
	th.appendChild(s);
}

// pass it through the chrome runtime API
// params = (file, node to append to)
// listen for event from injected script
console.log('content Script')
window.addEventListener("getRemixData", (e) => {
	// const port = chrome.runtime.connect({ name: "remixDJ" });
	if (!e.detail) {
		chrome.storage.local.set({ remixManifest: false})
	} else {
		console.log('setting storage to:  ', e.detail)
		chrome.storage.local.set({ remixManifest: e.detail })
		chrome.runtime.sendMessage(JSON.stringify({ message: 'remixDetected' }))
	}
}, false)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	const newMessage = JSON.parse(message);
	if (newMessage.message === 'runScript') {
		injectScript(chrome.runtime.getURL('detect_remix.js'), 'body');
	}
})

console.log('about to run inject script')
injectScript(chrome.runtime.getURL('detect_remix.js'), 'body');
