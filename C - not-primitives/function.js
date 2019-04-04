// Declaration
// Classic way
function doSomething (param) {
    console.log(param)
}
// Lambda
const doSomethingAnotherWay = (param) => {
    console.log(param);
};

// Call
// doSomething('Classic');
// doSomethingAnotherWay('Lambda'); // => returns undefined

// function and destruction
// let mapParam = {age : 17, name: 'John', id: 'blablabla'};
//
// const { age, name } = mapParam;
// // console.log(age);
// // console.log(name);
//
// const printAgeClassic = (param) => {
//     param.age += 2;
//     console.log(`Age is ${param.age}`);
// };
//
// const printAge = ({ age }) => {
//     age += 2;
//     console.log(`Age is ${age}`);
// };
//
// printAge(mapParam);
//
// // printAgeClassic(mapParam);
//
// console.log(mapParam);

// Return values
// const getSum = (a, b) => {
//     return a + b;
// };
//
// const result = getSum(3, 5);

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

const functionWithError  = (param) => {
    if (param === 3) {
        throw new Error("I don't like 3!")
    }
    console.log('Param is not 3 and I like it!');
};
//
// functionWithError(3);
// functionWithError(5);


try {
    functionWithError(5);
    console.log('ghghghj');
} catch (error) {
    console.log('But I like 3!')
}

console.log('afterException');
