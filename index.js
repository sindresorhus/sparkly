'use strict';
var isFinite = require('is-finite');

module.exports = function (numbers, range) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var finiteNumbers = numbers.filter(isFinite);
	var min;
	var max;

	if (range && range.min) {
		min = range.min;
	} else {
		min = Math.min.apply(null, finiteNumbers);
	}

	if (range && range.max) {
		max = range.max;
	} else {
		max = Math.max.apply(null, finiteNumbers);
	}

	// use a high tick if data is constant
	if (min === max) {
		ticks = [ticks[4]];
	}

	return numbers.map(function (el) {
		if (!isFinite(el)) {
			return ' ';
		}

		var tickIndex = Math.ceil((el / max) * ticks.length) - 1;

		if (tickIndex < 0) {
			tickIndex = 0;
		}

		return ticks[tickIndex];
	}).join('');
};
