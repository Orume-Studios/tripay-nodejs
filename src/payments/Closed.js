const closedPayment = {
    /**
     * 
     * @param { string } apiKey 
     */
    createTransaction: (apiKey) => {
        
    },
    /**
     * 
     * @param { string } apiKey 
     */
    getTransaction: (apiKey) => {
        
    },
    /**
     * 
     * @param { string } apiKey 
     */
    generateSignature: (apiKey) => {

    }
}

/**
 * 
 * @param { string } apiKey 
 */
module.exports = (apiKey) => {
    const createTransaction = () => closedPayment.createTransaction(apiKey)
    const getTransaction = () => closedPayment.getTransaction(apiKey)
    const generateSignature = () => closedPayment.generateSignature(apiKey)
    

    return { createTransaction, getTransaction, generateSignature }
}