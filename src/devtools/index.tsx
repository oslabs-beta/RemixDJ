import React from "react";
import { createRoot } from "react-dom/client";



chrome.devtools.panels.create('RemixDJ', null, "../panel/panel.html", () => {
	chrome.runtime.sendMessage(JSON.stringify({message: 'panelOpen'}))
});
