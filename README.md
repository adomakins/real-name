# real-name

A lightweight utility that checks if a string matches any name that has been used in the United States from 1880 to 2008, based on Social Security Administration data.

This also works for names from other countries. Check out the full dataset [here](https://github.com/adomakins/real-name/blob/main/names.csv) to see for yourself.

## Installation

```bash
npm install real-name
```

## Usage

```javascript
const isName = require('real-name');

// Returns true
console.log(isName('John'));
console.log(isName('Jane'));

// Returns false
console.log(isName('Xyz123')); // false
console.log(isName('Apple')); // false

```

## Features

- Checks against a comprehensive database of US names from 1880-2008
- Case-insensitive matching
- Handles whitespace trimming
- Zero dependencies
- Simple, straightforward API

## API

### isName(string)

Returns `true` if the provided string matches any name in the database, `false` otherwise.

#### Parameters

- `string` (String): The text to check against the name database

#### Returns

- (Boolean): `true` if the string matches a known name, `false` otherwise

## License

ISC

## Contributing

Issues and pull requests are welcome! Please feel free to submit them on the [GitHub repository](https://github.com/adomakins/real-name).