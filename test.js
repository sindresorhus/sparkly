import test from 'ava';
import chalk from 'chalk';
import sparkly from './index.js';

chalk.level = 3;

// Example
console.log('  ' + sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'}) + '\n');

test('creates graph', t => {
	t.is(sparkly([1, 5, 22, 13, 5]), '▁▂█▅▂');
	t.is(sparkly([0, 30, 55, 80, 33, 150]), '▁▂▃▅▂█');
	t.is(sparkly([5.5, 20]), '▁█');
	t.is(sparkly([1, 2, 3, 4, 100, 5, 10, 20, 50, 300]), '▁▁▁▁▃▁▁▁▂█');
	t.is(sparkly([1, 50, 100]), '▁▄█');
	t.is(sparkly([2, 4, 8]), '▁▃█');
	t.is(sparkly([1, 2, 3, 4, 5]), '▁▂▄▆█');
	t.is(sparkly([25, 45]), '▁█');
});

test('anything other than finite numbers causes holes', t => {
	t.is(sparkly([1, '', 3, Number.NaN, 5]), '▁ ▄ █');
});

test('use the middle tick if data is constant', t => {
	t.is(sparkly([10, 10, 10, 10, 10]), '▅▅▅▅▅');
});

test('use the lowest tick if data is all 0', t => {
	t.is(sparkly([0, 0, 0, 0, 0]), '▁▁▁▁▁');
});

test('minimum and maximum arguments set graph range', t => {
	t.is(sparkly([1], {minimum: 0, maximum: 1}), '█');
	t.is(sparkly([1, 2, 3, 4, 5], {minimum: 0, maximum: 10}), '▁▂▃▄▄');
	t.is(sparkly([10, 11, 12, 13], {minimum: 0}), '▇▇██');
	t.is(sparkly([10, 20, 30, 40, 50], {maximum: 100}), '▁▂▃▄▄');
});

test('colored graph', t => {
	t.is(sparkly([1], {style: 'fire'}), chalk.rgb(5, 5, 4)('▅'));
});
