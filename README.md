# phonecodelib

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


