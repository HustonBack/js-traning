// Declaration
const valid = true;
const invalid = false;
// Operations
const inverted = !valid; // => false

// Strict equality
const strictFalse = 3 === 4; // => false
const strictTrue  = 3 !== 4; // => true

// Bigger, lower etc.
const bigger = 4 > 3;
const lower  = 3 < 4;
const biggerOrEqual = 4 >= 3;
const lowerOrEqual  = 3 <= 4;

// Combinatorial operations
const or = true || false; // => Logical 'OR'
const and = true && false; // => Logical 'AND'
const priority = (true || false) && true; // => true

// *** JS Magic *** //
// Not strict equality - DO NOT USE!!!
const unstrict = '3' == 3; // => true
// Comparisons
const equalToString = 3 <= '3'; // => true (applied conversion to number)
const stringComparison = 3 < 'string'; // always false, not depends on operation
