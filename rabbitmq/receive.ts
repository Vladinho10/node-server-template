import amqp from 'amqplib';

import { rabbitmq } from '../configs';

(async () => {
    try {
        const connection = await amqp.connect(rabbitmq.host);
        const channel = await connection.createChannel();

        channel.consume(rabbitmq.queue, msg => {
            console.log(' [x] Received %s', msg.content.toString());
        }, {
            noAck: rabbitmq.receive_noAck,
        });
    } catch (error) {
        console.log('error message', error.message);
    }
})();
