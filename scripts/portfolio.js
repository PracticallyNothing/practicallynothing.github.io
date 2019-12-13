let menu = document.getElementsByClassName("menu")[0];
let initialMenuHeight = menu.clientHeight;
let activePage = null

function init() {
	let elems = document.getElementsByClassName("button");
	for(let i = 0; i < elems.length; i++) {
		elems[i].onclick = () => { show(elems[i]); }
	}
}

const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 4);
	}
};

function hide() {
	menu.animate([
		// keyframes
		{ transform: 'translateX(-100%)' }, 
		{ transform: 'translateX(0)' }
	], { 
		// timing options
		duration: 300,
		easing: "ease-out",
		iterations: 1, 
		fill: "forwards"
	});

	menu.style.height = "auto";

	setTimeout(() => {
		activePage.classList.add("hidden");
		activePage=null
	}, 280);
	scrollToTop();
}

function show(section) {
	menu.animate([
		// keyframes
		{ transform: 'translateX(0)' }, 
		{ transform: 'translateX(-100%)' }
	], { 
		// timing options
		duration: 300,
		easing: "ease-out",
		iterations: 1, 
		fill: "forwards"
	});
	let page = document.querySelector(".portfolio-page#" + section.id);

	page.classList.remove("hidden");
	activePage = page;
	menu.style.height = page.clientHeight + "px";

	scrollToTop();
}


init();
