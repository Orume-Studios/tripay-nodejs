const test = require('../index');

const tripay = new test({
    merchantCode: "T9978",
    apiKey: "bTc4tjTEgr0juzPpkyMK8Pwx2xZRuyChYHDE79xw",
    privateKey: "LwtoG-wQMS3-Ji7PL-A4gVs-PZmGC",
    productionMode: true,
    callbackServer: {
        port: 3000,
        saveResponseData: true,
        local: true
    }
});

tripay.getPaymentChannels().then(payment => {
    
});
