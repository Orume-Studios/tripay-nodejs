const openPayment = {
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
    const createTransaction = () => openPayment.createTransaction(apiKey)
    const getTransaction = () => openPayment.getTransaction(apiKey)
    const generateSignature = () => openPayment.generateSignature(apiKey)
    

    return { createTransaction, getTransaction, generateSignature }
}