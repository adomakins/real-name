import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const csvPath = join(__dirname, 'names.csv');
const outputPath = join(__dirname, 'names.json');

// Read and process the CSV
const csv = readFileSync(csvPath, 'utf-8');
const names = csv.split('\n')
    .filter(Boolean)
    .slice(1) // Skip header row
    .map(name => name.trim().toLowerCase());

// Group names by length
const namesByLength = names.reduce((acc, name) => {
    const length = name.length;
    if (!acc[length]) {
        acc[length] = new Set();
    }
    acc[length].add(name);
    return acc;
}, {});

// Convert Sets to Arrays
const finalNamesByLength = Object.fromEntries(
    Object.entries(namesByLength).map(([length, nameSet]) => [length, [...nameSet]])
);

// Write to file as JSON
writeFileSync(outputPath, JSON.stringify(finalNamesByLength, null, 2));