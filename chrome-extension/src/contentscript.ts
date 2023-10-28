function injectScript(file: string) {
  const body = document.getElementsByTagName('body')[0];
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file);
  body.appendChild(script);
}

// listen for event from injected script
window.addEventListener(
  'getRemixData',
  (e) => {
    try {
      if (!e.detail) {
        chrome.storage.local.set({ remixManifest: false });
      } else {
        chrome.storage.local.set({ remixManifest: e.detail });
        chrome.runtime.sendMessage(
          JSON.stringify({ message: 'remixDetected' }),
        );
      }
    } catch (e) {
      console.error(
        'RemixDJ Extention was installed more than once. This window stayed open and should be refreshed',
      );
      console.error(e);
    }
  },
  false,
);

//listen for event from panel open
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const newMessage = JSON.parse(message);
  if (newMessage.message === 'runScript') {
    injectScript(chrome.runtime.getURL('detect_remix.js'));
  }
});

injectScript(chrome.runtime.getURL('detect_remix.js'));
