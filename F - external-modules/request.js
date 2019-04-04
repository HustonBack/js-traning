


// async function some() {
//     console.log('something');
// }
//
// (
//     some
// )()

// const time = Date.now();


// request.get({
//     uri: 'https://neckermann.nl/api/packages',
//     json: true
// }).then(
//     (response) => {
//     console.log(response);
//     return request.post({uri: 'https://neckermann.nl/api/packages',
//         body: response.items[0]}
//         );
// }).then((postResponse) => {
//
// });

// const someStuff = async () => {
//     const packagesResponse = await request.get({
//         uri: 'https://thomascook.com/api/packages',
//         json: true
//     });
//     const items = packagesResponse.items;
// };
//
// someStuff();

// console.log('Time after promise' + (Date.now() - time));


// (
//     async () => {
//         const time = Date.now();
//         const promise = await request.get({
//             uri: 'https://neckermann.nl/api/packages',
//             json: true
//         });
//         console.log(Date.now() - time);
//         const response = await promise;
//         console.log(Date.now() - time);
//         console.log(response);
//     }
// )();




// const responseMeta = await request.post({
//     uri: 'https://neckermann.nl/api/meta/search',
//     body: {
//         "entities" : [
//             {"type":"AIRPORTS","limit":50}
//         ],
//         "query":{
//             "constraints": {
//                 "entityType":"DESTINATIONS",
//                 "ids": ["any"]
//             },
//             "popular":true
//         }
//     },
//     json: true
// });
// console.log(responseMeta);
const request = require('request-promise-native');
// const resolver = async () => {
// //     const packagesResponse = await request.get({
// //         uri: 'https://www.thomascook.com/api/packages',
// //         json: true
// //     });
// //     console.log('1')
// // };
// //
// // const arr = [resolver, resolver, resolver];
// //
// // (async () => {
// //     for (let i of arr) {
// //         await i();
// //     }
// // })();

// const call = request.get({
//     uri: 'https://www.thomascook.com/api/packages',
//     json: true
// });

const resolver = async () => {
    const packagesResponse = await request.get({
        uri: 'https://www.thomascook.com/api/packages',
        json: true
    });
    console.log('1')
};

// resolver   => function

// resolver() => Promise<>

const arr = [resolver(), resolver(), resolver()];

// Promise.all(arr); // => Promise => arr => response

// arr => [Promise<TCobject>, Promise<TCobject>, promise<TCobject>]
// Promise.all(arr) => Promise<[TCobject, TCobject, TCobject]>
// await Promise.all(arr) => [TCobject, TCobject, TCobject]

(
    async () => {
        await Promise.all(arr);
    }
)();




