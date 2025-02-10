import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { mailOptions } from '../configs';

const transporter = nodemailer.createTransport(mailOptions);

export class EmailSendSrv {
    static async sendLink(email: string, options: {message: string}): Promise<SMTPTransport.SentMessageInfo> {
        const message = {
            from: mailOptions.auth.user,
            to: email,
            subject: 'Message title',
            text: 'Plaintext version of the message',
            html: `<p>${options.message}</p>`,
        };

        return transporter.sendMail(message);
    }
}
