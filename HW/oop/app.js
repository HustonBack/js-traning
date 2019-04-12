const RandomHotel = require('./randomHotel');

const randomHotel = new RandomHotel();
async function init() {
    await randomHotel.initialize();
    const sample = randomHotel.getRandomHotelName();
    console.log(sample);
}

init();
