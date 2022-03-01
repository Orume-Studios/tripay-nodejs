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

import { OpenPaymentCode, PaymentCode } from "./PaymentChannels";

export interface IOpenPaymentTransactionDetailResponse {
    success: boolean;
    message: string;
    data: {
      uuid: string;
      merchant_ref: string;
      customer_name: string;
      payment_name: string;
      payment_method: OpenPaymentCode;
      pay_code: string;
      qr_string: string;
      qr_url: string;
    }
}

export interface IOpenPaymentTransactionCreate {
    method: OpenPaymentCode;
    merchant_ref?: string;
    customer_name?: string;
    signature?: string;
}

export interface IClosedPaymentTransactionResponse {
    success: boolean;
    message: string;
    data: {
        reference: string;
        merchant_ref: string;
        payment_selection_type: string;
        payment_method: PaymentCode;
        payment_name: string;
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        callback_url: string;
        return_url: string;
        amount: number;
        fee_merchant: number;
        fee_customer: number;
        total_fee: number;
        amount_received: number;
        pay_code: string;
        pay_url: string;
        checkout_url: string;
        status: string;
        expired_time: number;
        order_items: {
          sku: string;
          name: string;
          price: number;
          quantity: number;
          subtotal: number;
          product_url: string;
          image_url: string;
        }[];
        instructions: {
          title: string;
          steps: string[];
        }[];
        qr_string: string;
        qr_url: string;
    }
}

export interface IClosedPaymentTransactionCreate {
    method: PaymentCode;
    amount: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    order_items: {
        sku: string;
        name: string;
        price: number;
        quantity: number;
        product_url: string;
        image_url: string;
    }[];
    callback_url?: string;
    return_url?: string;
    expired_time?: string;
    signature?: string;
    merchant_ref?: string;
}