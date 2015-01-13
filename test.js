'use strict';
var test = require('ava');
var sparkly = require('./');

test('creates graph', function (t) {
	t.assert(sparkly([1, 5, 22, 13, 5]) === '▁▂█▅▂');
	t.assert(sparkly([0, 30, 55, 80, 33, 150]) === '▁▂▃▅▂█');
	t.assert(sparkly([5.5, 20]) === '▃█');
	t.assert(sparkly([1, 2, 3, 4, 100, 5, 10, 20, 50, 300]) === '▁▁▁▁▃▁▁▁▂█');
	t.assert(sparkly([1, 50, 100]) === '▁▄█');
	t.assert(sparkly([2, 4, 8]) === '▂▄█');
	t.assert(sparkly([1, 2, 3, 4, 5]) === '▂▄▅▇█');
    t.assert(sparkly([25, 45]) === '▅█');
	t.end();
});

test('anything other than finite numbers causes holes', function (t) {
	t.assert(sparkly([1, '', 3, NaN, 5]) === '▂ ▅ █');
	t.end();
});

test('use the middle tick if data is constant', function (t) {
	t.assert(sparkly([10, 10, 10, 10, 10]) === '▅▅▅▅▅');
	t.end();
});
