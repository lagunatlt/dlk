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

// var $status = $('.pagingInfo');
// var $slickElement = $('.cat-slider__item');

// $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
// 	var i = (currentSlide ? currentSlide : 0) + 1;
// 	$status.text(i + '/' + slick.slideCount);
// });



// ------------------------

// $(".cat-slider__item").on("init", function (event, slick) {
// 	$(".pagingInfo").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
// });

// $(".cat-slider__item").on("afterChange", function (event, slick, currentSlide) {
// 	$(".pagingInfo").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
// });
// $(".cat-slider__item").slick({
// 	slidesToShow: 1,
// 	arrows: true,
// 	infinite: true,
// 	slidesToShow: 5,
// 	slidesToScroll: 4,
// 	variableWidth: true,
// 	centerMode: true,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
// 	prevArrow: $('.button__prev'),
// 	nextArrow: $('.button__next'),
// });