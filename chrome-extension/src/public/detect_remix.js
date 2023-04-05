if (window["__remixContext"]) {
	console.log("feefifofum, i smell remix in the dom")

	// create a new event using dispatchEvent with a custom event type
	const data = {
		detail: window.__remixManifest,
	}

	window.dispatchEvent(new CustomEvent("RemixData", data));
}
