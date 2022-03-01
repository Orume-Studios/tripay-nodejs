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
class TriPay {
    /**
     * 
     * @param { import('./typings/Credentials').default } credentials
     */
    constructor(credentials) {
        
        if(credentials.apiKey == undefined || credentials.apiKey.length < 1) {
            throw new Error("api key should not be undefined!");
        }
        if(credentials.privateKey == undefined || credentials.privateKey.length < 1) {
            throw new Error("private key should not be undefined!");
        }
        if(credentials.merchantCode == undefined || credentials.merchantCode.length < 1) {
            throw new Error("merchant code should not be undefined!");
        }

        const _apiKey = credentials.apiKey;
        const _privateKey = credentials.privateKey;
        const _merchantCode = credentials.merchantCode;
        const _fetcher = new FetchUrl(_apiKey);
        
        var _callbackUrl = credentials.callbackUrl;
        var _returnUrl = credentials.returnUrl;
        var _productionMode = credentials.productionMode == undefined ? true : credentials.productionMode;

        this.fetch = _fetcher.fetch;

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
        this.getApiURL = () => {
            return this.isProductionMode() ? "https://tripay.co.id/api" : "https://tripay.co.id/api-sandbox";
        }
    }
    

    /**
     * 
     * @param { ( import('./typings/PaymentChannels').PaymentCode ) } [code] - Payment channel code. If the parameter is empty, the result will be a list of all available payment channels 
     * 
     * @returns { Promise < import('./typings/PaymentChannels').IPaymentChannelsGETResponse > }
     */
    async getPaymentChannels(code) {
        if(code == undefined) code = "";
        else code = "?code=" + code;

        const response = await this.fetch(this.getApiURL() + "/merchant/payment-channel" + code, "GET");
        return await response.json();
    }

    /**
     * @param { import('./typings/Transactions').ITransactionsGETFilters } filters - Filter result data that matches with the given filter. If the filters are empty, the result will be a list of all transactions data
     *
     * @returns { Promise < import('./typings/Transactions').ITransactionsGETResponse > }
     */
    async getTransactions(filters) {
        var filtersValue = "";
        if(filters != undefined) {
            for(const filter in filters) {
                if(filter != undefined) {
                
                    filtersValue.length != 0 ? filtersValue += `&${filter}=${filters[filter]}` : filtersValue = `?${filter}=${filters[filter]}`
                }
            }
        }

        const response = await this.fetch(this.getApiURL() + "/merchant/transactions" + filtersValue, "GET");
        return await response.json();
    }
    

    /**
     * 
     * @param { integer } amount - Transaction amount
     * @param { import('./typings/PaymentChannels').PaymentCode } [code] - Payment channel code. If the parameter is empty, the result will be a list of all available payment channels 
     * @returns {  Promise< import('./typings/FeeCalculator').IFeeCalculatorGETResponse > }
     */
    async calculateFee(amount, code) {
        const response = await this.fetch(this.getApiURL() + "/merchant/fee-calculator" + `?amount=${amount}` + (code ? `&code=${amount}` : ""), "GET");

        return await response.json();
    }
}

module.exports = TriPay;
