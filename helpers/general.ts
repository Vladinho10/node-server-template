/* eslint-disable no-empty */
'use strict';
import { Worker } from  'worker_threads';

// eslint-disable-next-line arrow-body-style
const putSegmentsInPromise = (segments: any[], childWorkerPath: string, data = {}) => {
    return segments.map(segment => new Promise((resolve, reject) => {
        // transfer data to each workers/threads
        const worker = new Worker(childWorkerPath, {
            workerData: {
                segment,
                ...data,
            },
        });

        // when received data form worker, resolve/return it
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    }));
};

const jsonParser = (jsonString: string) => {
    let data = {};

    try {
        data = JSON.parse(jsonString);
    } catch (err) {}

    return data;
};

const isCurrentUser = (_id: any, user: any) => _id.toString() === user._id.toString();

const general = {
    isCurrentUser,
    jsonParser,
    putSegmentsInPromise,
};

export { general };
