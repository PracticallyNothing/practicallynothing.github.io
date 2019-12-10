function show(section) {
	section.children[1].classList.toggle("hidden");
}

function init() {
	let elems = document.getElementsByClassName("collapsable section");
	for(let i = 0; i < elems.length; i++) {
		elems[i].children[0].onclick = () => { show(elems[i]); }
	}
}

init();
