// Summarize all primitive conversions

// String -> Number
let stringArithmetic = '4' - '5'; // Also * ans /, but not +!
let comparison = 3 < '4'; // Dynamically converts to number
const equality = 3 == '3'; // The same

// Boolean -> Number
// const valid = true + 2; // => 3
const invalid = false + 2; // => 2

// String -> NaN
let dummyOps = 3 - 'string'; // => NaN, but 3 + 'string = '3string'
let dummyComparison = 3 < 'string'; // Always false

// console.log(undefined == false);
// console.log(null == false);
// console.log(0 == false);
// console.log('' == false);


const valid = true;
console.log(typeof valid.toString());
