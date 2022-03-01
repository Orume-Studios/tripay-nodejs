/**
 * 
 * Link - https://github.com/Orume-Studios/tripay-nodejs
 * 
 * Written by:
 * Yudha Abhista (@Yusta)
 * 
 * TriPay Wrapper NodeJS
 * 
 * Copyright © 2022 Orume Studios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const { FetchUrl } = require('./Http');
const { Merchant } = require('./Merchant');
const { ClosedPayment, OpenPayment } = require('./Payment');

class TriPay {
    /**
     * 
     * @param { import('./typings/Credentials').default } credentials
     */
    constructor(credentials) {

        if(!credentials.apiKey || credentials.apiKey.length < 1) {
            throw new Error("api key should not be undefined!");
        }
        if(!credentials.privateKey || credentials.privateKey.length < 1) {
            throw new Error("private key should not be undefined!");
        }
        if(!credentials.merchantCode || credentials.merchantCode.length < 1) {
            throw new Error("merchant code should not be undefined!");
        }

        const _apiKey = credentials.apiKey;
        const _privateKey = credentials.privateKey;
        const _merchantCode = credentials.merchantCode;
        const _fetcher = new FetchUrl(_apiKey);
        const _debug = credentials.debug == undefined ? true : credentials.debug;

        var _callbackUrl = credentials.callbackUrl;
        var _returnUrl = credentials.returnUrl;
        var _productionMode = credentials.productionMode == undefined ? true : credentials.productionMode;

        this._getFetcher = () => _fetcher;
        this.getCredentials = () => {
            const isDebug = () => _debug;
            const getApiKey = () => _apiKey;
            const getPrivateKey = () => _privateKey;
            const getMerchantCode = () => _merchantCode;

            return { isDebug, getApiKey, getPrivateKey, getMerchantCode }
        }

        this.getCallbackUrl = () => _callbackUrl
        this.getReturnUrl = () => _returnUrl;
        this.isProductionMode = () => _productionMode;
        this.getApiURL = () => this.isProductionMode() ? "https://tripay.co.id/api" : "https://tripay.co.id/api-sandbox";
        this.getClosedPaymentAPI  = () => new ClosedPayment(this);
        this.getOpenPaymentAPI = () => new OpenPayment(this);
        this.getMerchantAPI = () => new Merchant(this);

        /**
         * 
         * @param { string } value 
         * @returns { void }
         */
        this.setCallbackUrl = (value) => _callbackUrl = value;
        
        /**
         * 
         * @param { boolean } value
         * @returns { void }
         */
        this.setProductionMode = (value) => _productionMode = value;

        /**
         * 
         * @param { string } url 
         * @returns { void }
         */
        this.setReturnUrl = (url) => _returnUrl = url;

        /**
         * 
         * @param { string } value 
         * @returns { void }
         */
        this.setCallbackUrl = (value) => _callbackUrl = value;
        
    }
}

module.exports = { TriPay };
