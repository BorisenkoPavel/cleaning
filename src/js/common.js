$(document).ready(function () {
	
	AOS.init();

	svg4everybody({});

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
});

$(function(){
  $(".twentytwenty-container").twentytwenty({
		before_label: 'До', // Set a custom before label
    after_label: 'После'
	});
});

var swiper = new Swiper('.main-slider', {
	pagination: {
		el: '.swiper-pagination.main-slider-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
		},
	},
	navigation: {
		nextEl: '.swiper-button-next.main-slider-next',
		prevEl: '.swiper-button-prev.main-slider-prev',
	},
});

var swiper = new Swiper('.before-after-slider', {
	simulateTouch: false,
	pagination: {
		el: '.swiper-pagination.swiper-before-after-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next.swiper-before-after-next',
		prevEl: '.swiper-button-prev.swiper-before-after-prev',
	},
});


});
