const { fetchUrl, METHOD } = require('./Http');

class TriPay {
    /**
     * 
     * @param { string } apiKey 
     * @param { string } privateKey 
     * @param { string } merchantCode 
     * @param { string } merchantRef 
     * @param { string } callbackUrl 
     * @param { string } returnUrl 
     * @param { boolean } [productionMode]
     */
    constructor(apiKey, privateKey, merchantCode, merchantRef, callbackUrl, returnUrl, productionMode) {

        if(apiKey == undefined || apiKey.length < 1) {
            throw new Error("api key should not be undefined!");
        }
        if(privateKey == undefined || privateKey.length < 1) {
            throw new Error("private key should not be undefined!");
        }
        if(merchantCode == undefined || merchantCode.length < 1) {
            throw new Error("merchant code should not be undefined!");
        }

        const _apiKey = apiKey;
        const _privateKey = privateKey;
        const _merchantCode = merchantCode;
        const _merchantRef = merchantRef;
        
        var _callbackUrl = callbackUrl;
        var _returnUrl = returnUrl;
        var _productionMode = productionMode == undefined ? true : productionMode;

        /**
         * @returns { string }
         */
        this.getApiKey = () => {
            return _apiKey;
        }

        /**
         * 
         * @returns { string }
         */
        this.getPrivateKey = () => {
            return _privateKey;
        }
        
        /**
         * 
         * @returns { string }
         */
        this.getMerchantCode = () => {
            return _merchantCode;
        }

        /**
         * 
         * @returns { string }
         */
        this.getMerchantRef = () => {
            return _merchantRef;
        }


        /**
         * 
         * @returns { string }
         */
        this.getCallbackUrl = () => {
            return _callbackUrl;
        }


        /**
         * 
         * @param { string } value 
         * @returns { void }
         */
        this.setCallbackUrl = (value) => {
            _callbackUrl = value;
        }

        /**
         * 
         * @returns { string }
         */
        this.getReturnUrl = () => {
            return _returnUrl;
        }

        /**
         * 
         * @param { string } url 
         * @returns { void }
         */
        this.setReturnUrl = (url) => {
            _returnUrl = url;
        }

        /**
         * 
         * @returns { boolean }
         */
        this.isProductionMode = () => {
            return _productionMode;
        }

        /**
         * 
         * @param { boolean } value
         * @returns { void }
         */
        this.setProductionMode = (value) => {
            _productionMode = value;
        }


        /**
         * 
         * @returns { string }
         */
        this.getApiURL = function () {
            return this.isProductionMode() ? "https://tripay.co.id/api-sandbox" : "https://tripay.co.id/api"
        }
    }

    getPaymentChannels() {

    }

    getTransactions() {

    }

    /**
     * 
     * @param { integer } amount 
     * @param { string } [code] 
     */
    calculate(amount, code) {
        if((amount == undefined || !(amount instanceof Number) || amount instanceof NaN) || (code != undefined && (code instanceof String))) {
            return undefined;
        }



        fetchUrl(this.getApiURL(), "GET" ,this.getApiKey(), {
            body: {
                "amount": amount,
                "code": code
            }
        })
    }
}

module.exports = TriPay;
