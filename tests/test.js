const { TriPay: test} = require('../index');

const tripay = new test(credentials);

tripay.getClosedPaymentAPI().getTransaction("agagas").then(result => {
    console.log(result)
})