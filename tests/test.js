const { TriPay: test} = require('../index');
const config = require('./.config');
const tripay = new test(config.tripayCredentials);

tripay.getClosedPaymentAPI().getTransaction("agagas").then(result => {
    console.log(result)
})