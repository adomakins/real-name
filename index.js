import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the JSON file
const namesByLength = JSON.parse(
    readFileSync(join(__dirname, 'names.json'), 'utf-8')
);

const isName = (nameToCheck) => {
    if (!nameToCheck || typeof nameToCheck !== 'string') {
        return false;
    }

    try {
        const normalizedName = nameToCheck.toLowerCase().trim();
        const length = normalizedName.length;
        
        // Check if we have any names of this length
        if (!namesByLength[length]) {
            return false;
        }

        // Check if the name exists in the array for this length
        return namesByLength[length].includes(normalizedName);
    } catch (error) {
        console.error("Error checking name:", error);
        return false;
    }
};

export default isName;