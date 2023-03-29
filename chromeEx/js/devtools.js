chrome.devtools.panels.create('REMIX', null, '/html/panel.html', null);
chrome.devtools.inspectedWindow.getResources((reso)=> console.log(reso))
console.log('after')
const tabId = chrome.devtools.inspectedWindow.tabId;
console.log(tabId)
// const test = document.createElement('div')
// test.innerText='TEST INPUT'
// document.body.appendChild(test)
// chrome.devtools.panels.elements.createSidebarPane('test', (sidebar) => {
// 	sidebar.setPage('../html/panel.html')
// 	sidebar.setObject({data: "data to show"})
// })
