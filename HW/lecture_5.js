const _ = require('lodash');
const request = require('request-promise-native');
const productCodes = [];

const packagesCall = async () => {
    const packagesResponse = await request.get({
        uri: 'https://neckermann.nl/api/packages',
        json: true
    });
    packagesResponse.items.forEach(
        (item) => {
            productCodes.push(item.productCode)
        }
    );
    console.log(_.uniq(productCodes));
    console.log(productCodes);
};

packagesCall();
