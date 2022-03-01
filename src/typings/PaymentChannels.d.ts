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

export interface IPaymentChannelsGETResponse {
    success: boolean;
    message: string;
    data: [
        {
            group: string;
            code: string;
            name: string;
            type: string;
            fee_merchant: {
                flat: number;
                percent: number;
            };
            fee_customer: {
                flat: number;
                percent: number;
            };
            total_fee: {
                flat: number;
                percent: number;
            };
            icon_url:string;
            active: string;
        }
    ]
}

export type PaymentCode = "MYBVA" | 
"PERMATAVA" | "BNIVA" | "BRIVA" | "MANDIRIVA" |
 "BCAVA" | "SMSVA" | "MUAMALATVA" | "CIMBVA" | 
 "SAMPOERNAVA" | "BSIVA" | "DANAMONVA" | "BRIVAOP" | 
 "CIMBVAOP" | "DANAMONOP" | "BNIVAOP" | "HANAVAOP" |
 "BSIVAOP" | "ALFAMART" | "INDOMARET" | "ALFAMIDI" |
 "OVO" | "QRIS" | "QRISC" | "QRISD" | "QRISOP" |
 "QRISCOP"