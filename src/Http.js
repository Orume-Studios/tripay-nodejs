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

const fetch = require('node-fetch');

/**
 * @class FetchUrl
 */
class FetchUrl {

    /**
     * 
     * @param { string } [apiKey]
     */
    constructor(apiKey) {
        const _apiKey = apiKey;

        this.getApiKey = () => {
            return _apiKey;
        }
    }
    /**
     * 
     * @param { fetch.RequestInfo } url
     * @param { import('./typings/Method').HTTPMethod } method
     * @param { fetch.RequestInit } [init]
     * @returns { Promise<fetch.Response> }
     */
    async fetch(url, method, init) {


        if(method instanceof String) {
            method = method.toUpperCase();
        }
    
        if(init == undefined) {
            init = {};
        }
    
        if(init.headers == undefined) {
            init.headers = {};
        }
    
        
        if(this.getApiKey != undefined) {
            init.headers["Authorization"] = `Bearer ${this.getApiKey()}`;
        }
    
        init.headers["User-Agent"] = "Orume Studios/TriPay NodeJS v1."
        init.method = method;
        if(init.body != undefined) {
            init.body = JSON.parse(init.body);
        }
        
        return await fetch.default(url, init);
    }
}

module.exports = { FetchUrl };