#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var sparkly = require('./');
var input = argv._;

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    sparkly [opts] <number> ...',
		'    echo [opts] <number> ... | sparkly',
		'',
		'  Example',
		'    sparkly 0 3 5 8 4 3 4 10',
		'    ▁▃▄▅▃▃▃▆',

    '    sparkly --min=0 --max=10 1 2 3 4 5',
    '    ▁▂▃▄▄'
	].join('\n'));
}

function init(data) {
	console.log(sparkly(data, argv));
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

if (argv.help) {
	help();
	return;
}

if (process.stdin.isTTY) {
	if (input.length === 0) {
		help();
		return;
	}

	init(input);
} else {
	stdin(function (data) {
		init(data.trim().split(/\s+/).map(function (el) {
			return parseFloat(el, 10);
		}));
	});
}
