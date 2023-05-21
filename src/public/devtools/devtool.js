chrome.devtools.panels.create('RemixDJ', null, "../panel/panel.html", () => {
	chrome.runtime.sendMessage(JSON.stringify({message: 'panelOpen'}))
});
