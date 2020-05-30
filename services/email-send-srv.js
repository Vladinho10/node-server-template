'use strict';
const nodemailer = require('nodemailer');

const configs = require('../configs');
const transporter = nodemailer.createTransport(configs.mailOptions);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log({ success });
        console.log('Server is ready to take our messages');
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
