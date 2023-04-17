import { windowObjUnderscore } from "../types";
if ((window as unknown as windowObjUnderscore).__remixManifest) {
	console.log("💿 feefifofum 👹, i smell remix in the dom 💿")
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: (window as unknown as windowObjUnderscore).__remixManifest}));
} else {
	console.log('❌💔 no 🚫🥺 remix😔❌');
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: {}}));
}
