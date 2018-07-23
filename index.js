'use strict';
const chalk = require('chalk');

module.exports = (numbers, options = {}) => {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	let ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	const color = [[5, 5, 4], [5, 5, 3], [5, 5, 0], [5, 4, 0], [5, 3, 0], [5, 2, 0], [5, 1, 0], [5, 0, 0]];
	const finiteNumbers = numbers.filter(number => Number.isFinite(number));
	const min = typeof options.min === 'number' ? options.min : Math.min(...finiteNumbers);
	const max = typeof options.max === 'number' ? options.max : Math.max(...finiteNumbers);

	// Use a high tick if data is constant and max is not equal to 0
	if (min === max && max !== 0) {
		ticks = [ticks[4]];
	}

	return numbers.map(el => {
		if (!Number.isFinite(el)) {
			return ' ';
		}

		let tickIndex = Math.ceil((el / max) * ticks.length) - 1;

		if (max === 0 || tickIndex < 0) {
			tickIndex = 0;
		}

		if (options.style === 'fire') {
			return chalk.rgb(...color[tickIndex])(ticks[tickIndex]);
		}

		return ticks[tickIndex];
	}).join('');
};
