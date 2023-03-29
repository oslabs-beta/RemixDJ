// window.addEventListener("load", (e) => {
// 	console.log('event')
// 	console.log(window)
// 	console.log(window["__remixContext"])
// })

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
injectScript(chrome.runtime.getURL('js/detect_remix.js'), 'body');

// listen for event from injected script
window.addEventListener("getRemixData", (e) => {
	console.log('eventlistener')
	console.log(e.detail)
}, false)
