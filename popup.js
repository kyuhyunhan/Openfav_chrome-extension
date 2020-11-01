$(document).ready(function() {
	let inputNodes = document.getElementsByClassName('urls')
	for(let i=0;i<5;i++){
		chrome.storage.local.get(['i'], function(result) {
			console.log(i)
			console.log(result.i)
			inputNodes[i].value = result.i
		})
	}
})

let addFavBtn = document.getElementById('addFavBtn');
let favs = document.getElementById('favs');

saveChanges.onclick = function() {
	let urls = document.getElementsByClassName('urls')
	console.log(Array.isArray(urls))
	var tmp
	Array.prototype.forEach.call(urls, function(url, i) {
		tmp = url.value
		console.log(tmp)
		chrome.storage.local.set({i:tmp}, function() {
			console.log(i + ' is set to ' + tmp)
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
