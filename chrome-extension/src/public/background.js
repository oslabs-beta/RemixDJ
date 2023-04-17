chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
	let tabId;
	await chrome.tabs.query({ currentWindow: true, active: true }).then(res => {
		tabId = res[0]
	});
	const newMessage = JSON.parse(message)
	if (newMessage.message === 'remixDetected') {

		chrome.action.setIcon({
			tabId: tabId.id, path: {
				48: 'icons/logo48.png',
				128: 'icons/logo128.png',
				256: 'icons/logo256.png'
			}
		})
	}
})
