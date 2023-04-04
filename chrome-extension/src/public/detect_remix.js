if (window["__remixContext"]) {
	console.log("feefifofum, i smell remix in the dom")
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: window.__remixManifest}));
}
