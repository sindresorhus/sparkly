'use strict';
var isFinite = require('is-finite');

module.exports = function (numbers, opts) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var finiteNumbers = numbers.filter(isFinite);
  opts = opts || {};
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

		return ticks[tickIndex];
	}).join('');
};
