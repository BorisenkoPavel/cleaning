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

var BeforeSwiper = new Swiper('.before-after-slider', {
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

var slideCount = function() {
	curSlide = $('.swiper-pagination-bullet-active').html()
	$('.swiper-count').html(curSlide)
}

slideCount();

swiper.on('slideChange', function () {
  slideCount()
});
$(window).scroll(function () {
	var offset = $('.section-garant').offset()
	if ($(this).scrollTop() >= offset.top - 350) {
		$('#num1').animate({
			num: 10 - 0 /* - начало */
		}, {
			duration: 1500,
			step: function (num) {
				this.innerHTML = ((num + 0).toFixed())
			}
		});
		$('#num2').animate({
			num2: 1240 - 0 /* - начало */
		}, {
			duration: 1500,
			step: function (num2) {
				this.innerHTML = ((num2 + 0).toFixed())
			}
		});
		$('#num3').animate({
			num3: 24 - 0 /* - начало */
		}, {
			duration: 1500,
			step: function (num3) {
				this.innerHTML = ((num3 + 0).toFixed())
			}
		});
		$('#num4').animate({
			num4: 8 - 0 /* - начало */
		}, {
			duration: 1500,
			step: function (num4) {
				this.innerHTML = ((num4 + 0).toFixed())
			}
		});
		$('#num5').animate({
			num4: 10 - 0 /* - начало */
		}, {
			duration: 1500,
			step: function (num4) {
				this.innerHTML = ((num4 + 0).toFixed())
			}
		});
	}
});


});
