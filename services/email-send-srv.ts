import * as nodemailer from 'nodemailer';

import { mailOptions } from '../configs';

const transporter = nodemailer.createTransport(mailOptions);

export class EmailSendSrv {
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
