const a = 3;
const b = 4;
const statement = a * b > b ** 2;
const difference = (b ** 2 - a * b);
// Declaration
if (statement) {
    console.log('statement is true');
}else {
    console.log('statement is not true');
}

// *** JS Magic *** //
if (undefined || null || '' || 0) {
    console.log('undefined is true')
}

if (statement) {
    console.log('statement is true');
}else if (difference <= 2){
    console.log('a little bit!');
} else {
    console.log('statement is not true');
}

