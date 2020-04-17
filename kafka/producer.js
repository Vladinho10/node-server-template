const kafka = require('kafka-node');
const config = require('./configure.js');

const value = {
    event_type: 'video_music_action',
    platform: 'ios',
    deviceid: 'thisisuniquedevice',
    data: {
        result_source: 'audiobyte',
        music_id: 764127419408844200,
        action: 'apply',
        editor_sid: 'thisIssessionid',
        targetPlatform: 'facebook'
    },
    timestamp: 1586270867431
};

const event = {
    value: JSON.stringify(value)
};

try {
    const { Producer, KafkaClient } = kafka;
    const client = new KafkaClient({
        kafkaHost: config.kafka_server
    });
    const producer = new Producer(client);
    const { kafka_topic } = config;

    const payloads = [
        {
            topic: kafka_topic,
            messages: [
                event.value
            ],
        }
    ];

    producer.on('ready',  () => {
        producer.send(payloads, (err, data) => {
            if (err) {
                console.log(`[kafka-producer -> ${kafka_topic}]: broker update failed`);
                console.log({ err });
            } else {
                console.log({ data });
                console.log(`[kafka-producer -> ${kafka_topic}]: broker update success`);
            }
        });
    });

    producer.on('error', (err) => {
        console.log({ err });
        console.log(`[kafka-producer -> ${kafka_topic}]: connection errored`);
        throw err;
    });
    console.log('end of try');
} catch (e) {
    console.log({ e });
}
