const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'names.csv');
const outputPath = path.join(__dirname, 'names.js');

const csv = fs.readFileSync(csvPath, 'utf-8');
const jsContent = `module.exports = ${JSON.stringify(csv)};`;

fs.writeFileSync(outputPath, jsContent);