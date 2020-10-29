let addFavBtn = document.getElementById('addFavBtn');
let favs = document.getElementById('favs');

addFavBtn.onclick = function() {
	let instance = document.getElementsByClassName('fav-template-instance')[0];
	let clnInstance = instance.cloneNode(true);
	clnInstance.style.display = "inline";
	favs.appendChild(clnInstance);
}

// Vimium을 다시 보니, <template> 태그를 활용해서 클론을 한거 같다. 그걸로 다시 해봐야겠음
