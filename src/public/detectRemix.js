if (window.__remixManifest) {
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: window.__remixManifest}));
} else {
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: false}));
}
