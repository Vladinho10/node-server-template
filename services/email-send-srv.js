const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport(config.mailOptions);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log({ success });
        console.log('Server is ready to take our messages');
    }
});

const message = {
    from: 'from@gmail.com',
    to: 'garmanbozia@mailinator.com',
    subject: 'Message title',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
};

const sendLink = async (message) => {
    const data = await transporter.sendMail(message);
    console.log({ data });
};

(async () => await sendLink(message))().catch(e => console.log({ e }));
