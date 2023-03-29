if (window["__remixContext"]) {
	console.log("i smell remix")
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: window.__remixManifest}));
}
