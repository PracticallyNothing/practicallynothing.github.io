let header = document.getElementsByTagName("header")[0]
let tgt = null

function updateHeader() 
{
	if(window.innerWidth > 880) {
		header.classList.remove("mobile")
		header.classList.remove("shown")
		header.classList.add("desktop")
	} else {
		header.classList.remove("desktop")
		header.classList.add("mobile")
	}
}

function isChild(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

updateHeader()
window.addEventListener("resize", updateHeader);
document.addEventListener("click", (event) => {
	if(window.innerWidth > 880 || !header.classList.contains("shown"))
		return;

	if(!isChild(header, event.target))
		header.classList.toggle("shown")
});

header.onclick = function(event)
{
	if(window.innerWidth > 880) {
		return;
	}

	header.classList.toggle("shown")
}
