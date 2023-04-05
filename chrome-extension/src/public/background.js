// console.log('hi from SW')
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	console.log(message)
// })
chrome.runtime.onConnect.addListener( function(port) {
	console.log('Connected to content script: ', port.sender.tab.title);
	port.onMessage.addListener( function(msg) {
    // Message data
		if (msg.data) {
			console.log("Message Data: ", msg.data)
		}
	});
});
