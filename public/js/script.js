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

imagesLoaded(document.querySelector('.want-gallery'), function( instance ) {
	var msnry = new Masonry( '.want-gallery', {
   	columnWidth: ".want-gallery__item",
   	transitionDuration: '0.5s',
   	horizontalOrder: true,
   	itemSelector: '.want-gallery__item'
	});
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
