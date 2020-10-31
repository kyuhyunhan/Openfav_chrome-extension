let addFavBtn = document.getElementById('addFavBtn');
let favs = document.getElementById('favs');

saveChanges.onclick = function() {
	let urls = document.getElementsByClassName('urls')
	Array.prototype.forEach.call(urls, function(url, i) {
		i = i + 1
		chrome.storage.sync.set({i:url}, function() {
			console.log(i + ' is set to ' + url.value)
		})
	})
}

/*
추가 기능 함수. 정상 작동. 추후 기능 추가 시 활용
addFavBtn.onclick = function() {
	var favTemplate = document.querySelector('#fav-template')
	var tbody = document.querySelector('tbody')
	var clone = document.importNode(favTemplate.content, true)
	tbody.appendChild(clone)
}
*/


/*
삭제 기능 개발 중, CSP로 인해 onclick()이 작동 하지 않는 관계로 함수 사용 불가
function remove(e) {
	e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
*/


/*
삭제 기능 개발 중(2), 추후 수정해서 기능 추가
document.addEventListener('DOMContentLoaded', function() {
	const rmvBtns = document.getElementsByClassName('fav-remove-btn')
	console.log(rmvBtns)
	rmvBtns.prototype.forEach((btn) => {
			console.log(btn)
		})
	})
*/
