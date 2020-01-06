$(document).ready(function ($) {
	let nav = $('.top_box');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			nav.addClass("top_box_shadow");
		} else {
			nav.removeClass("top_box_shadow");
		}
	});

});


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

$('input[type="range"]').rangeslider({

	polyfill: false,

	rangeClass: 'rangeslider',
	disabledClass: 'rangeslider--disabled',
	horizontalClass: 'rangeslider--horizontal',
	fillClass: 'rangeslider__fill',
	handleClass: 'rangeslider__handle',

	onInit: function () {
		$rangeEl = this.$range;
		let $handle = $rangeEl.find('.rangeslider__handle');
		let handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
		$handle.append(handleValue);

		let rangeLabels = this.$element.attr('labels');
		rangeLabels = rangeLabels.split(', ');

		$rangeEl.append('<div class="rangeslider__labels"></div>');
		$(rangeLabels).each(function (index, value) {
			$rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
		})
	},

	onSlide: function (position, value) {
		let $handle = this.$range.find('.rangeslider__handle__value');
		$handle.text(this.value);
	},

	onSlideEnd: function (position, value) { }
});
