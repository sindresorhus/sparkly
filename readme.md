# ![sparkly](https://cloud.githubusercontent.com/assets/170270/4068189/1b47cab0-2e36-11e4-8b75-16b80330147e.gif) [![Build Status](https://travis-ci.org/sindresorhus/sparkly.svg?branch=master)](https://travis-ci.org/sindresorhus/sparkly)

> Generate sparklines `▁▂▃▅▂▇`

JavaScript port of [spark.sh](https://github.com/holman/spark).

[Some cool use-cases.](https://github.com/holman/spark/wiki/Wicked-Cool-Usage)


## Install

```
$ npm install sparkly
```


## Usage

```js
const sparkly = require('sparkly');

sparkly([0, 3, 5, 8, 4, 3, 4, 10]);
//=> '▁▃▄▇▄▃▄█'

// Specifying anything other than finite numbers will cause holes
sparkly([0, 3, 5, '', 4, 3, 4, 10]);
//=> '▁▃▄ ▄▃▄█'

// Specifying an object with minimum and maximum options will change the sparkline range
sparkly([1, 2, 3, 4, 5], {minimum: 0, maximum: 10});
//=> '▁▂▃▄▄'

// Specifying a style option will change the sparkline color
sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'});
// ↓
```

<img src="screenshot.png" width="383">


## API

### sparkly(numbers, [options])

#### numbers

Type: `number[]`

Numbers to create the sparkline from.

#### options

Type: `object`

##### minimum

Type: `number`

Minimum range.

##### maximum

Type: `number`

Maximum range.

##### style

Type: `string`<br>
Values: `'fire'`

Style for the sparklines.


## Related

- [sparkly-cli](https://github.com/sindresorhus/sparkly-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
