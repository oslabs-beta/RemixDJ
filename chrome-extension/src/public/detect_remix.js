if (window["__remixContext"]) {
	console.log("feefifofum, i smell a remix in the dom")
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: window.__remixManifest}));
}
