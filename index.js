'use strict';
var isFinite = require('is-finite');
var colors = require('ansi-256-colors');

module.exports = function (numbers, opts) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	opts = opts || {};

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var color = [[5, 5, 4], [5, 5, 3], [5, 5, 0], [5, 4, 0], [5, 3, 0], [5, 2, 0], [5, 1, 0], [5, 0, 0]];
	var finiteNumbers = numbers.filter(isFinite);
	var min = typeof opts.min === 'number' ? opts.min : Math.min.apply(null, finiteNumbers);
	var max = typeof opts.max === 'number' ? opts.max : Math.max.apply(null, finiteNumbers);

	// use a high tick if data is constant and max is not equal to 0
	if (min === max && max !== 0) {
		ticks = [ticks[4]];
	}

	return numbers.map(function (el) {
		if (!isFinite(el)) {
			return ' ';
		}

		var tickIndex = Math.ceil((el / max) * ticks.length) - 1;

		if (max === 0 || tickIndex < 0) {
			tickIndex = 0;
		}

		if (opts.style === 'fire') {
			return colors.fg.getRgb.apply(colors.fg, color[tickIndex]) + ticks[tickIndex] + colors.reset;
		}

		return ticks[tickIndex];
	}).join('');
};
