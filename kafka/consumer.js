const kafka = require('kafka-node');
const config = require('./configure.js');

try {
    const { Consumer, KafkaClient } = kafka;
    const client = new KafkaClient({
        kafkaHost: config.kafka_server
    });    const consumer = new Consumer(
        client,
        [{ topic: config.kafka_topic, partition: 0 }],
        {
            autoCommit: true,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024,
            encoding: 'utf8',
            fromOffset: false
        }
    );
    console.log('this is start');
    consumer.on('message',  (message) => {
        console.log({ message });
    });
    consumer.on('error', (err) => {
        console.log('error', err);
    });
    console.log('this is end');
} catch (e) {
    console.log(e);
}
