declare namespace sparkly {
	interface Options {
		/**
		Minimum range.
		*/
		readonly minimum?: number;

		/**
		Maximum range.
		*/
		readonly maximum?: number;

		/**
		Style for the sparklines.
		*/
		readonly style?: 'fire';
	}
}

/**
Generate sparklines `▁▂▃▅▂▇`.

@param numbers - Numbers to create the sparkline from.

@example
```
const sparkly = require('sparkly');

sparkly([0, 3, 5, 8, 4, 3, 4, 10]);
//=> '▁▃▄▇▄▃▄█'

// Specifying anything other than finite numbers will cause holes
sparkly([0, 3, 5, '', 4, 3, 4, 10]);
//=> '▁▃▄ ▄▃▄█'

// Specifying an object with minimum and maximum options will change the sparkline range
sparkly([1, 2, 3, 4, 5], {minimum: 0, maximum: 10});
//=> '▁▂▃▄▄'
```
*/
declare function sparkly(
	numbers: ReadonlyArray<number | ''>,
	options?: sparkly.Options
): string;

export = sparkly;
