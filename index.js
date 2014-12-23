'use strict';
var isFinite = require('is-finite');

module.exports = function (numbers) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var finiteNumbers = numbers.filter(isFinite);
	var min = Math.min.apply(null, finiteNumbers);
	var max = Math.max.apply(null, finiteNumbers);
	var f = ((max - min) << 8) / (ticks.length - 1);

	// use a high tick if data is constant
	if (min === max) {
		ticks = [ticks[4]];
	}

	if (f < 1) {
		f = 1;
	}

	return numbers.map(function (el) {
		if (!isFinite(el)) {
			return ' ';
		}

		return ticks[Math.floor(((el - min) << 8) / f)];
	}).join('');
};
