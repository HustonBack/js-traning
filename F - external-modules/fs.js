const fs = require('fs');

const jsonString = fs.readFileSync(__dirname + '/data.json', 'UTF-8');
console.log(jsonString);
