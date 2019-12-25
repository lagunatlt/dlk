$('.cat-slider__item').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 2,
	variableWidth: true,
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow: $('.button__prev'),
	nextArrow: $('.button__next'),
});