// Declaration
// Classic way
function doSomething (param) {
    console.log(param)
}

const doSomethingAnotherWay = (param) => {
    console.log(param);
};

// Call
doSomething('Classic');
doSomethingAnotherWay('Lambda'); // => returns undefined

// function and destruction
// let mapParam = {age : 17, name: 'John', id: 'blablabla'};
// const printAge = ({ age }) => {
//     console.log(`Age is ${age}`);
// };
// printAge(mapParam);

// Return values
// const getSum = (a, b) => {
//     return a + b;
// };
//
// const result = getSum(3, 5);
// console.log(result);

// return break all!
// const infiniteLoop = () => {
//     let index = 3;
//     while(true) {
//         if (index === 7) {
//             return 7;
//         }
//         console.log(index);
//         index += 2;
//     }
// };
// console.log(infiniteLoop());

// Throwing Exceptions

// const functionWithError  = (param) => {
//     if (param === 3) {
//         throw new Error("I don't like 3!")
//     }
//     console.log('Param is not 3 and I like it!');
// };
//
// functionWithError(5);
// functionWithError(3);

// try {
//     functionWithError(3)
// } catch (error) {
//     console.log('But I like 3!')
// }

console.log('afterException');
