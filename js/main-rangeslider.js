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

	onSlideEnd: function (position, value) {}
});