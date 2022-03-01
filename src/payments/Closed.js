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

const crypto = require('node:crypto');

class ClosedPayment {
    /**
     * 
     * @param { import('../TriPay').TriPay } tripay 
     */
    constructor(tripay) {
        const _tripay = tripay;
        this._getTripay = () => _tripay;
    }
    /**
     * 
     * @param { import('../typings/Payment').IClosedPaymentTransactionCreate } data
     * @returns { Promise<import('../typings/Payment').IClosedPaymentTransactionResponse>}
     */
    async createTransaction(data) {
        if(data.signature == undefined) data.signature = this._generateSignature(data.amount, data.merchant_ref);

        const response = await this._getTripay()._getFetcher().fetch(this._getTripay().getApiURL() + `/transaction/create`, "POST", {body: data});
        return await response.json();
    }
    /**
     * 
     * @param { string } reference
     * @returns { Promise<import('../typings/Payment').IClosedPaymentTransactionResponse> }
     */
    async getTransaction(reference) {
        const response = await this._getTripay()._getFetcher().fetch(this._getTripay().getApiURL() + `/transaction/detail?reference=${reference}`, "GET");
        return await response.json();
    }
    
    /**
     * 
     * @param { integer } amount
     * @param { string } [merchantRef]
     * @returns { string }
     */
    _generateSignature(amount, merchantRef) {
        if(merchantRef == undefined) merchantRef == "";

        return crypto.createHmac('sha256', this._getTripay().getCredentials().getPrivateKey())
        .update(this._getTripay().getCredentials().getMerchantCode() + merchantRef + amount)
        .digest('hex');
    }
}

module.exports = { ClosedPayment }