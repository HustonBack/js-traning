// Declaration

const array1 = [0, 0, 0, 0];
const array2 = ['string', 5, true, false, 7, 'sum', 'another'];

// Getting elements
// Array is 0-based
console.log(array2[1], array2[5]);
// Length of array
const argLength = array2.length; // => 7

for (let i of array2) {
    console.log(i)
}

// Add array items to the end

array2.push('addedItem');

// Iterators
array2.forEach(
    (element, index, array) => {
        // console.log({ element, index, array })
    }
);

const trans = (element, index) => {

};

const modifiedArray = array2.map(trans);
console.log(array2);
console.log(modifiedArray);

const filteredArray = array2.filter(
    (element) => {
        if (typeof element === 'string') {
            return false;
        }
        return true;
    }
);

console.log(array2);
console.log(filteredArray);


