## Abbr-number-to-string

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![npm version](https://badge.fury.io/js/abbr-number-to-string.svg)](https://www.npmjs.com/package/abbr-number-to-string)

A simple package to convert number data types into an abbreviated string. It takes in two arguments: the number to convert and the amount of decimal places you would like to round up to. 

abbrNum(3567, 2) will become 3.57K

abbrNum(2942345,1) will become 2.9M

abbrNum(9876234987,3) will become 9.876B

Installation: 
```js
npm i abbr-number-to-string --save
```

Usage: 
```js
const abbrNum = require('abbr-number-to-string')

abbrNum(number,decimalpoints)
```

Uses Mocha and Travis for testing. 