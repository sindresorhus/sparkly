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
	var min = opts.min || Math.min.apply(null, finiteNumbers);
	var max = opts.max || Math.max.apply(null, finiteNumbers);

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

		if (opts.style === 'fire') {
			return colors.fg.getRgb.apply(colors.fg, color[tickIndex]) + ticks[tickIndex] + colors.reset;
		}

		return ticks[tickIndex];
	}).join('');
};
