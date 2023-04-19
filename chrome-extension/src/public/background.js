//Adds the contentscript to all complete, non-discarded tabs on install
//does not include active tab (the chrome extension store)
chrome.runtime.onInstalled.addListener(async () => {
	for (const cs of chrome.runtime.getManifest().content_scripts) {
		for (const tab of await chrome.tabs.query({
			discarded: false,
			status: "complete",
			url: cs.matches,
			active: false
		})) {
			try {
				chrome.scripting.executeScript({
					target: { tabId: tab.id, allFrames: true },
					files: ['contentscript.js']
				})
			} catch (e) {
				//if this triggers, you might want to add something to the query
				console.error('Error running contentscript during install on window: ', err, tab)
			}
		}
	}
})

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	const tabs = await chrome.tabs.query({ currentWindow: true, active: true });
	const tabId = tabs[0];

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

	if (newMessage.message === 'panelOpen') {
		if (tabs.length === 1) {
			try {
				chrome.tabs.sendMessage(tabs[0].id, JSON.stringify({ message: "runScript" }))

			} catch (e) {
				//if no listener is attached, tab must be reloaded
				//not sure if this is needed anymore... but there could be an edge case
				chrome.tabs.reload(tabs[0].id)

			}
		}
	}
})
