// Module with only folder name
const imported = require('./folder-module');
const { anotherStuff } = require('./folder-module/sub-module');

console.log(imported);
