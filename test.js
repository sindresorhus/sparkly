import test from 'ava';
import fn from './';

test('creates graph', t => {
	t.is(fn([1, 5, 22, 13, 5]), '▁▂█▅▂');
	t.is(fn([0, 30, 55, 80, 33, 150]), '▁▂▃▅▂█');
	t.is(fn([5.5, 20]), '▃█');
	t.is(fn([1, 2, 3, 4, 100, 5, 10, 20, 50, 300]), '▁▁▁▁▃▁▁▁▂█');
	t.is(fn([1, 50, 100]), '▁▄█');
	t.is(fn([2, 4, 8]), '▂▄█');
	t.is(fn([1, 2, 3, 4, 5]), '▂▄▅▇█');
	t.is(fn([25, 45]), '▅█');
});

test('anything other than finite numbers causes holes', t => {
	t.is(fn([1, '', 3, NaN, 5]), '▂ ▅ █');
});

test('use the middle tick if data is constant', t => {
	t.is(fn([10, 10, 10, 10, 10]), '▅▅▅▅▅');
});

test('min and max arguments set graph range', t => {
	t.is(fn([1, 2, 3, 4, 5], {min: 0, max: 10}), '▁▂▃▄▄');
	t.is(fn([10, 11, 12, 13], {min: 0}), '▇▇██');
	t.is(fn([10, 20, 30, 40, 50], {max: 100}), '▁▂▃▄▄');
});
