'use strict';
const nodemailer = require('nodemailer');

const configs = require('../configs');

logger.info('configs.mailOptions', configs.mailOptions);
const transporter = nodemailer.createTransport(configs.mailOptions);

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

module.exports = {
    EmailSendSrv,
};
