const fetch = require('node-fetch');

/**
 * 
 * @param { fetch.RequestInfo } url
 * @param { import('./typings/method').HTTPMethod } method
 * @param { string } [apiKey]
 * @param { fetch.RequestInit } [init]
 * @returns { Promise<fetch.Response> }
 */
const fetchUrl = async (url, method, apiKey, init) => {
    if(method instanceof String) {
        method = method.toUpperCase();
    }
    
    url.agent = "TriPay NodeJS - Orume Studios";
    if(apiKey != undefined) {
        init.headers["Authorization"] = apiKey;
    }

    init.method = method;
    return await fetch.default(url, init);
}

module.exports = { fetchUrl, METHOD };