const _ = require ('lodash');
const request = require('request-promise-native');

class RandomHotel {

    //Async method initialize()  -
    // No arguments. it must make a request to /api/packages endpoint
    // and assign response to private variable _allPackages. Method must return nothing.
    async initialize (){
        this._allPackages = await request.get({
            uri: 'https://www.thomascook.com/api/packages',
            json: true
        });
        console.log(JSON.stringify(this._allPackages));
    }

    //Private method getHotelNames() -
    // No arguments. This method uses class variable allPackages calculate return value.
    // Return value - an array of string values (hotelNames of all items from response)

    _getHotelNames() {
        // console.log(JSON.stringify(this._allPackages.items)); // don't understand how to navigate
        return this._allPackages.items.map(item => {
            return item.hotel.value;
        }); // took items from request.js example
    }

    // - Method getRandomHotelName() - No arguments.
    // It must return random hotelName based on the method _getHotelNames.
    // Hint - you can choose random array element with some lodash method

    getRandomHotelName () {
        // console.log(_.sample(this._getHotelNames()));
        return _.sample(this._getHotelNames());
        // return this._getHotelNames()[Math.floor(Math.random()*this._getHotelNames().length)];
    }

}

module.exports = RandomHotel;
