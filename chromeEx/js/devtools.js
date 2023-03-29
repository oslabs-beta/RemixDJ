// todo: add more comments later
chrome.devtools.panels.create('REMIX', null, '/html/panel.html', null);
// chrome.devtools.inspectedWindow.getResources((reso)=> console.log(reso))
// console.log(tabId)
// chrome.devtools.panels.elements.createSidebarPane('test', (sidebar) => {
// 	sidebar.setPage('../html/panel.html')
// 	sidebar.setObject({data: "data to show"})
// })
let data;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	data = JSON.parse(message);
	console.log(data);
})
