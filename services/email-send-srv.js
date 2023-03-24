'use strict';
const nodemailer = require('nodemailer');

const configs = require('../configs');

const transporter = nodemailer.createTransport(configs.mailOptions);

class EmailSendSrv {
    static async sendLink(email, options) {
        const message = {
            from: 'startup-grind-gyumri@outlook.com',
            to: email,
            subject: 'Message title',
            text: 'Plaintext version of the message',
            html: `<p>${options.message}</p>`,
        };

        return transporter.sendMail(message);
    }
}

module.exports = {
    EmailSendSrv,
};
