# real-name

A lightweight utility that checks if a string matches any name that has been used in the United States from 1880 to 2008, based on Social Security Administration data.

This also works for names from other countries. Check out the full dataset <a href="https://github.com/adomakins/real-name/blob/main/names.csv" target="_blank">here</a> to see for yourself.

## Installation

```bash
npm install real-name
```

## Usage

### Check if a string is a name

```javascript

import isName from 'real-name';

// Basic name checking
console.log(isName('John')); // true
console.log(isName('Fruitcake')); // false

// Works with first names only
console.log(isName('John Smith')); // false
console.log(isName('John')); // true

// Case-insensitive
console.log(isName('john')); // true
console.log(isName('John')); // true
console.log(isName('JOHN')); // true

```

### Combine with `word-exists`

```javascript
// Optional accessory to combine with isName
// Not my package, need to install it separately
// And update it to use ESM syntax
import wordExists from 'word-exists';

// Stricter filtering by combining with word-exists
function isValidName(str) {
    return isName(str) && !wordExists(str);
}

// Not always that reliable
console.log(isValidName('Adam')); // true (it's a name, not a word)
console.log(isValidName('Dick')); // false (It means penis FYI)
console.log(isValidName('John')); // false (This means bathroom I guess?)
console.log(isValidName('Jane')); // false (Okay what the fuck)
console.log(isValidName('Tom')); // false (...? I guess don't try this)

```

### Extract names from an email address

```javascript

import isName from 'real-name';

function extractNameFromEmail(email) {
    // Get the part before the @ symbol and take only the first segment
    const firstName = email.split('@')[0].split(/[._-]/)[0];
    return isName(firstName) ? firstName[0].toUpperCase() + firstName.slice(1) : null;
}

// Example usage
console.log(extractNameFromEmail('john.doe@example.com')); // 'John'
console.log(extractNameFromEmail('jane_doe-123@example.com')); // 'Jane'
console.log(extractNameFromEmail('jim.bob@example.com')); // 'Jim'
console.log(extractNameFromEmail('jeff@example.com')); // 'Jeff'
console.log(extractNameFromEmail('hello@example.com')); // null

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

## Version 3.0.0

It was broken. Now it's fixed.

## Version 2.0.0

I finally started using this package to extract names from a dataset of email addresses, and I found some ways to improve it.

- Updated to use ESM syntax
- Changed to use JSON file with names grouped by length for faster lookups
- Good to combine with `word-exists` package for stricter filtering

Here's a quick <a href="https://youtu.be/GXC43r3H6Vg" target="_blank">YouTube video</a> I made showing how I used this package to extract names from a dataset of email addresses.

## License

ISC

## Contributing

Issues and pull requests are welcome! Please feel free to submit them on the [GitHub repository](https://github.com/adomakins/real-name).