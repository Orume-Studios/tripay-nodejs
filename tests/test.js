const test = require('../index');

const config = require('./.config.js');
const tripay = new test(config.tripayCredentials);

tripay.getPaymentChannels().then(payment => {
    console.log(payment)
});