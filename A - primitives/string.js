// Declaration
const declaration1 = 'string';
const declaration2 = "string";
const declaration3 = `string`;

const include1 = '"string"';
const include2 = "'string'";

// console.log(include1, include2);
// Concat, patterns
const concat = declaration1 + declaration2; // => stringstring
const pattern = `Here is include1 - ${include1}, and here is include2 - ${include2}`;
// console.log(pattern);

// *** JS Magic *** //
console.log('3' * '5');
console.log('3' / '5');
console.log('3' - '5');
console.log('concat ->', '3' + '5');

console.log('3' - 'k');
