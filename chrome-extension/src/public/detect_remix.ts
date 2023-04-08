interface manifestObj{name: string, max: number, widthSet: number, level: string, children: null| manifestObj[], x: number, y: number};
interface windowObj{__remixManifest: {routes: manifestObj}}
if ((window as unknown as windowObj).__remixManifest) {
	console.log("💿 feefifofum 👹, i smell remix in the dom 💿")
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: (window as unknown as windowObj).__remixManifest}));
} else {
	console.log('❌💔 no 🚫🥺 remix😔❌');
	window.dispatchEvent(new CustomEvent("getRemixData", {detail: {}}));
}
