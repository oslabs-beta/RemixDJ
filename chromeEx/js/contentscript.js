// window.addEventListener("load", (e) => {
// 	console.log('event')
// 	console.log(window)
// 	console.log(window["__remixContext"])
// })
function injectScript(file, node) {
	var th = document.getElementsByTagName(node)[0];
	var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', file);
	th.appendChild(s);
}
injectScript(chrome.runtime.getURL('js/detect_remix.js'), 'body');

window.addEventListener("getRemixData", (e) => {
	console.log('eventlistener')
	console.log(e.detail)
}, false)
