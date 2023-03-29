console.log('hi from SW')
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log('got message')
	console.log(message, sender)
})
// chrome.runtime.onConnect.addListener(function(port) {
// 	console.log('port opened')
// 	console.assert(port.name === "remixDJ");
// 	port.onMessage.addListener(function(msg) {
// 		if (msg.data) {
// 			console.log('background.js')
// 			console.log(msg.data)
// 		}
// 	});
// });
