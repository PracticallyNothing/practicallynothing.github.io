let menu = document.getElementsByClassName("multipage-main")[0];
let activePage = null

function resize() {
	if(activePage != null)
		menu.style.height = activePage.clientHeight + "px";
}

window.addEventListener("resize", resize);

const rx = /[\?\&]([\w0-9-]+)=([\w0-9-]+)/g
function getQSValue(name) {
	let match = rx.exec(window.location);

	while(match != null) {
		if(match[1] == name)
			return match[2];

		match = rx.exec(window.location);
	}

	return null;
}

window.onpopstate = (e) =>
{
	let qsval = getQSValue("page")
	if(qsval == null) {
		history.replaceState({}, "", location.href.split("?")[0])
		hide({})
	} else {
		show({id: qsval}, {})
	}
	console.log(e.state)
}

function init() {
	let elems = document.getElementsByClassName("button");
	for(let i = 0; i < elems.length; i++) {
		elems[i].onclick = () => { show(elems[i]); }
	}

	let qsval = getQSValue("page")
	if(qsval != null) {
		history.replaceState({}, "", location.href.split("?")[0])
		show({id: qsval})
		setTimeout(resize, 300);
		setTimeout(resize, 1000);
		setTimeout(resize, 3000);
		setTimeout(resize, 5000);
	}
}

const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 4);
	}
};

function hide(historyBack) {
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

	if(historyBack == undefined || historyBack == null)
		history.back();
}

function show(section, pushState) {
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
	let page = document.querySelector(".multipage-page#" + section.id);

	page.classList.remove("hidden");
	activePage = page;
	menu.style.height = page.clientHeight + "px";

	scrollToTop();

	if(pushState == undefined || pushState == null)
		history.pushState({}, "", "?page=" + section.id )
}

init();
