'use strict';
import * as nodemailer from 'nodemailer';

import configs from '../configs';

const transporter = nodemailer.createTransport(configs.mailOptions);
console.log('transporter', transporter);

class EmailSendSrv {
    static async sendLink(email, options) {
        const message = {
            from: 'from@gmail.com',
            to: email,
            subject: 'Message title',
            text: 'Plaintext version of the message',
            html: `<p>${options.message}</p>`,
        };

        return transporter.sendMail(message);
    }
}

export {
    EmailSendSrv,
};
