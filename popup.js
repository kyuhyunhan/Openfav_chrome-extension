let addFavBtn = document.getElementById('addFavBtn');
let favs = document.getElementById('favs');
/*
addFavBtn.onclick = function() {
	let instance = document.getElementsByClassName('fav-template-instance')[0];
	let clnInstance = instance.cloneNode(true);
	clnInstance.style.display = "inline";
	favs.appendChild(clnInstance);
}
*/

addFavBtn.onclick = function() {
	var favTemplate = document.querySelector('#fav-template')
	var tbody = document.querySelector('tbody')
	var clone = document.importNode(favTemplate.content, true)
	tbody.appendChild(clone)
}
