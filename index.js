const namesData = require('./names.js');

const isName = (nameToCheck) => {
    if (!nameToCheck || typeof nameToCheck !== 'string') {
        return false;
    }

    try {
        const rows = namesData
            .split('\n')
            .filter(Boolean)
            .slice(1); // Skip header row

        const normalizedNameToCheck = nameToCheck.toLowerCase().trim();
        return rows.some(row => row.trim().toLowerCase() === normalizedNameToCheck);
    } catch (error) {
        console.error("Error parsing names:", error);
        return false;
    }
};

module.exports = isName;