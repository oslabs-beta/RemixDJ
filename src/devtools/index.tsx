import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

function App(){
	useEffect(() => {
		chrome.devtools.panels.create('RemixDJ', null, "panel.bundle.html", () => {
			chrome.runtime.sendMessage(JSON.stringify({message: 'panelOpen'}))
		});
	})
	return <div>DevTools Panel</div>
}

const root = createRoot(document.getElementById("root"))
root.render(<App/>)
