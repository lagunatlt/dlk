$('.cat-slider__item').slick({
	// infinite: true,
	slidesToShow: 5,
	slidesToScroll: 4,
	variableWidth: true,
	centerMode: true,
	// autoplay: true,
	autoplaySpeed: 2000,
	prevArrow: $('.button__prev'),
	nextArrow: $('.button__next'),
});
// $('.main__item-slider').slick({
// 	infinite: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	variableWidth: false,
// 	centerMode: false,
// 	arrows: false,
// 	dots: true,
// 	cssEase: 'linear',
// });
// $('.main__item-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
// 	let i = (currentSlide ? currentSlide : 0) + 1;
// 	$('.dots-nav__current-slide').text("0" + i);
// });
