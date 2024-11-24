# real-name

A lightweight utility that checks if a string matches any name that has been used in the United States from 1880 to 2008, based on Social Security Administration data.

This also works for names from other countries. Check out the full dataset [here](https://github.com/adomakins/real-name/blob/main/names.csv) to see for yourself.

## Installation

```bash
npm install real-name
```

## Usage

```javascript
import isName from 'real-name';

// Basic name checking
console.log(isName('John')); // true
console.log(isName('Fruitcake')); // false

// Optional accessory to combine with isName
// Not my package, need to install it separately
// And update it to use ESM syntax
import wordExists from 'word-exists';

// Stricter filtering by combining with word-exists
function isValidName(str) {
    return isName(str) && !wordExists(str);
}

console.log(isValidName('Ace')); // false (it's a word too, not just a name)
console.log(isValidName('John')); // true (it's just a name, not a word)

```

## Features

- Checks against a comprehensive database of US names from 1880-2008
- Case-insensitive matching
- Handles whitespace trimming
- Zero dependencies
- Simple, straightforward API
- Optional combination with `word-exists` package for stricter filtering

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