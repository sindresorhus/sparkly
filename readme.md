# ![sparkly](https://cloud.githubusercontent.com/assets/170270/4068189/1b47cab0-2e36-11e4-8b75-16b80330147e.gif) [![Build Status](https://travis-ci.org/sindresorhus/sparkly.svg?branch=master)](https://travis-ci.org/sindresorhus/sparkly)

> Generate sparklines ▁▂▃▅▂▇

JavaScript port of [spark.sh](https://github.com/holman/spark).

Some [cool use-cases](https://github.com/holman/spark/wiki/Wicked-Cool-Usage).


## Usage

```sh
$ npm install --save sparkly
```

```js
var sparkly = require('sparkly');

sparkly([0, 3, 5, 8, 4, 3, 4, 10]);
//=> ▁▃▄▇▄▃▄█

// supplying anything other than finite numbers will cause holes
sparkly([0, 3, 5, '', 4, 3, 4, 10]);
//=> ▁▃▄ ▄▃▄█
```


## CLI

```sh
$ npm install --global sparkly
```

```
$ sparkly --help

  Usage
    sparkly <number> ...
    echo <number> ... | sparkly

  Example
    sparkly 0 3 5 8 4 3 4 10
    ▁▃▄▇▄▃▄█
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
