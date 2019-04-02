// // Declaration
//
// const array1 = [0, 0, 0, 0];
// const array2 = ['string', 5, true, false, 7, 'sum', 'another', {key: 'value'}];
//
// // Getting elements
// // Array is 0-based
// // console.log(array2[0]);
// // Length of array
// // const argLength = array2.length;
// // console.log(argLength);
// //
// for (let i of array2) {
//
// }
// // Add array items to the end
// //
// // array2.push('addedItem');
// // console.log(array2);
// // // Iterators
// // array2.forEach(
// //     (element, index, array) => {
// //         console.log({ element, index, array })
// //     }
// // );
// //
// //
// const modifiedArray = array2.map(
//     (element) => {
//     return element + 2;
// }
// );
// console.log(array2);
// console.log(modifiedArray);
//
// const filteredArray = array2.filter(
//     (element) => {
//         if (typeof element === 'string') {
//             return false;
//         }
//         return true;
//     }
// );
//
// console.log(array2);
// console.log(filteredArray);
//



const reverseNumber = (number) => {
    if (typeof number !== 'number') {
        throw new Error("It's not a number!")
    }

    let reverse = number.toString().split('').reverse().join('');
    +reverse.replace(",","");
    console.log (typeof(reverse));
    return reverse;
};
console.log (reverseNumber(12345));


