// Declaration
const map = {
    name: 'John',
    surname: 'Doe',
    age: 27,
    married: false,
    'invalid-for-js': true,
};

console.log(map.name);
console.log(map['name']);

// *** JS Magic *** //
const notExistingKey = map.school; // => undefined
if (!map[notExistingKey]) {
    console.log('School property does not exists');
}

// Destruction
const { name, age } = map;
console.log(name);

// Combining
const combine = { name, age };
console.log(combine);

// Cannot read property of undefined
const multiLevelMap = {
    map: {
        value: 0
    }
};
// Typo in key of object
// console.log(multiLevelMap.map1.value);
