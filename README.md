# phonecodelib

[![GitHub issues](https://img.shields.io/github/issues/menty44/phonecodelib)](https://github.com/menty44/phonecodelib/issues)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/menty44)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/menty44/phonecodelib/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://github.com/menty44/phonecodelib/releases/)
[![GitHub stars](https://img.shields.io/github/stars/menty44/phonecodelib)](https://github.com/menty44/phonecodelib/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/menty44/phonecodelib)](https://github.com/menty44/phonecodelib/network)[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

A javascript library for returning a country's info based on supplied parameters

## Table of Contents
- [Installing](#installing)
- [Example](#example)

## Installing

Using npm:

```bash
$ npm i @menty44/phonecodelib
```

## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const countryInfo = require('@menty44/phonecodelib');
```

### Example 1 
#### Get By Phone Number

```js
const countryInfo = require('@menty44/phonecodelib');

let info = countryInfo.getByPhoneNumber("2547XXXXXX");

console.log(info);
```

### Example 2
#### Get By Country Code ISO

```js
const countryInfo = require('@menty44/phonecodelib');

let info = countryInfo.getByCountryCode("Ke");

console.log(info);
```

### Example 3
#### Get By Country Name

```js
const countryInfo = require('@menty44/phonecodelib');

let info = countryInfo.getByCountryName("Kenya");

console.log(info);
```


