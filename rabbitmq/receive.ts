import amqp, { Message } from 'amqplib';

import { rabbitmq } from '../configs';

(async () => {
    try {
        const connection = await amqp.connect(rabbitmq.host);
        const channel = await connection.createChannel();

        channel.consume(rabbitmq.queue, (msg: Message | null) => {
            if (msg !== null) {
                console.log(' [x] Received %s', msg.content.toString());
            }
        }, {
            noAck: rabbitmq.receive_noAck,
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error('error message', error.message);

            return;
        }

        console.log('error', error);
    }
})();
