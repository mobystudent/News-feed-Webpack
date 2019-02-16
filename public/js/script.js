// $(document).ready(function(){
// 	$(".modal__wrap, .modal__ul, .modal__form").niceScroll({
// 		cursorcolor: "#8d3098",
// 		cursoropacitymin: 1,
// 		cursorwidth: "4px",
// 		cursorborderradius: "5px",
// 		cursorborder: 0,
// 		background: "#ececec",
// 		horizrailenabled: false
// 	});
// })

imagesLoaded(document.querySelector('.gallery--news'), function() {
	var msnry = new Masonry( '.gallery--news', {
   	columnWidth: ".img-thing--gallery",
   	transitionDuration: '0.5s',
   	horizontalOrder: true,
   	itemSelector: '.img-thing--gallery'
	});
});

imagesLoaded(document.querySelector('.gallery--search'), function() {
	var msnry = new Masonry( '.gallery--search', {
   	columnWidth: ".img-thing--gallery",
   	transitionDuration: '0.5s',
   	horizontalOrder: true,
   	itemSelector: '.img-thing--gallery'
	});
});

// var searchInput = document.
// document.querySelector('.search-box--search input').addEventListener('keyup', function(event) {
// 	// document.getElementsByClassName('search__block').style.display = "none";
// 	document.querySelector('.search__block').style.display = "none";
// 	document.querySelector('.btns-control--search').style.display = "flex";
// 	document.querySelector('.search__block-goods').style.display = "block";
// });

document.querySelector('.header__icon--envelope').addEventListener('click', function(){
	// document.querySelector(".modal--notification").style.display = "block";
	document.querySelector(".modal--notification").classList.add('modal--show');
	// console.log(document.querySelector("body").children)
	// if(window.innerWidth <768)
	// 	document.querySelector("body").children[1].style.display = "none";
});

document.querySelector('.header__icon--plus').addEventListener('click', function(){
	// document.querySelector(".modal--add-wish").style.display = "flex";
	document.querySelector(".modal--add-wish").classList.add('modal--show');
});

// document.querySelector('.data-user__block--friends').addEventListener('click', function(){
// 	document.querySelector(".modal--friend").style.display = "flex";
// });

document.addEventListener('click', function (e) {
	if (e.target.className == "modal__close" || e.target.classList[0] == "modal")
		document.querySelector(".modal").style.display = "none";
});

// document.addEventListener('click', function (e) {
// 	if(e.target.parentNode.classList[1] == "header__icon--plus") {
// 		document.querySelector(".modal-bg").style.display = "block";
// 		document.querySelector(".modal--add-wish").style.display = "block";
// 	} else if (e.target.parentNode.classList[1] == "header__icon--envelope") {
// 		document.querySelector(".modal-bg").style.display = "block";
// 		document.querySelector(".modal--notification").style.display = "block";
// 	}
// 	else if (e.target.parentNode.classList[1] == "data-user__block--friends") {
// 		document.querySelector(".modal-bg").style.display = "block";
// 		document.querySelector(".modal--friend").style.display = "block";
// 	}	else if (e.target.className == "modal__close" || e.target.className == "modal-bg") {
// 		document.querySelector(".modal-bg").style.display = "none";
// 		document.querySelector(".modal--add-wish").style.display = "none";
// 		document.querySelector(".modal--notification").style.display = "none";
// 		document.querySelector(".modal--friend").style.display = "none";
// 	}
// });
