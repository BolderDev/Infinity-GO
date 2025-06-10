const path = require('path');
const JSONdb = require('./json.js'); // Adjust the path if needed

// Example: Store database in ./data folder
const dbFile = path.join(__dirname, 'data', 'database.json');

const db = new JSONdb(dbFile);

module.exports = db;
