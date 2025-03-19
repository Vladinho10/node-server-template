import amqp from 'amqplib';

import { rabbitmq } from '../configs';

(async () => {
    try {
        const connection = await amqp.connect(rabbitmq.host);
        const channel = await connection.createChannel();

        channel.assertQueue(rabbitmq.queue, {
            durable: rabbitmq.send_durable,
        });
        let startNumber = 0;

        setInterval(() => {
            const msg = `Hello world ${startNumber += 1}`;
            channel.sendToQueue(rabbitmq.queue, Buffer.from(msg));
            console.log(msg);
        }, 3000);
    } catch (error) {
        console.log('error message', error.message);
    }
})();
