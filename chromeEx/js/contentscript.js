// alert('CS ALERT')
// // const test = document.createElement('div')
// test.innerText='TEST INPUT'
// document.body.appendChild(test)
console.log('start')
console.log(window)
console.log(window["__remixContext"])
document.addEventListener("DOMContentLoaded", (e) => {
	console.log('event')
	console.log(window)
})
setTimeout(() => {
	console.log('timeout')
	console.log(window["__remixContext"])
}, 5000)
