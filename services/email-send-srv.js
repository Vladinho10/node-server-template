'use strict';
const nodemailer = require('nodemailer');

const configs = require('../configs');
const transporter = nodemailer.createTransport(configs.mailOptions);

transporter.verify(error => {
    if (error) {
        logger.info(error);
    }
});

// const message = {
//     from: 'from@gmail.com',
//     to: 'garmanbozia@mailinator.com',
//     subject: 'Message title',
//     text: 'Plaintext version of the message',
//     html: '<p>HTML version of the message</p>'
// };

const sendLink = async message => transporter.sendMail(message);

// (async () => console.log(await sendLink(message)))().catch(e => console.log({ e }));

module.exports = {
    sendLink,
};
