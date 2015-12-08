'use strict';
var isFinite = require('is-finite');
var colors = require('ansi-256-colors');

module.exports = function (numbers, opts) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	opts = opts || {};

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var finiteNumbers = numbers.filter(isFinite);
	var min = opts.min || Math.min.apply(null, finiteNumbers);
	var max = opts.max || Math.max.apply(null, finiteNumbers);
	var color = opts.color || '';
	if (color === 'fire') {
		ticks = [colors.fg.getRgb(5,5,3) + '▁', colors.fg.getRgb(5,5,4) + '▂', colors.fg.getRgb(5,5,0) + '▃', colors.fg.getRgb(5,4,0) + '▄', colors.fg.getRgb(5,3,0) + '▅', colors.fg.getRgb(5,2,0) + '▆', colors.fg.getRgb(5,1,0) + '▇', colors.fg.getRgb(5,0,0) + '█'];
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
