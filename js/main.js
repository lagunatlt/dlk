$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 52) {
			$('.top_box').addClass('fixed-top');
		} else {
			$('.top_box').removeClass('fixed-top');
		}
	});
});

$(window).width(function () {
	let width = $('body').innerWidth();
		if (width <= 640) {
			$('.header__nav-wrap').addClass('fly_menu');
		}
});

$('.menu_button-close').click(function () {
	$('.header__nav-wrap').addClass('menu-hide')
	$('body').removeClass('scroll-none')
	$('.header__nav-wrap').removeClass('menu-open')
	$('.fixed-top').removeClass('fixed-top-bgr')

})
$('.menu_button-open').click(function () {
	$('.header__nav-wrap').addClass('menu-open')
	$('.fixed-top').addClass('fixed-top-bgr')
	$('body').addClass('scroll-none')
	$('.header__nav-wrap').removeClass('menu-hide')
})

$('.cat-slider__item').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 4,
	variableWidth: true,
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow: $('.button__prev'),
	nextArrow: $('.button__next'),
});
$('.main__item-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: false,
	centerMode: false,
	arrows: false,
	dots: true,
	fade: true,
	autoplay: true,
	autoplaySpeed: 2000,
	cssEase: 'linear',
	dotsClass: 'dots-nav__dots',
});
$('.main__item-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	let i = (currentSlide ? currentSlide : 0) + 1;
	$('.dots-nav__current-slide').text("0" + i);
});

