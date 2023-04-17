console.log('hi from SW')
chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
	let tabId;
	await chrome.tabs.query({ currentWindow: true, active: true }).then(res => {
		tabId = res[0]
	});
	const newMessage = JSON.parse(message)
	console.log(newMessage)
	if (newMessage.message === 'remixDetected') {

		console.log('setIcon')
		chrome.action.setIcon({
			tabId: tabId.id, path: {
				16: 'icons/logo16.png',
				48: 'icons/logo48.png'

			}
		})
	}
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
