import { Worker } from  'worker_threads';

import { ObjectId } from 'mongoose';

import { UserI } from '../dal/models';

const sleep = (seconds = 1): void => {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, seconds * 1000);
};
// eslint-disable-next-line arrow-body-style
const putSegmentsInPromise = (segments: unknown[], childWorkerPath: string, data = {}) => {
    return segments.map(segment => new Promise((resolve, reject) => {
        // transfer data to each worker/threads
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

const jsonParser = (jsonString: string): object => {
    let data = {};

    try {
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log('json parser error', err);
    }

    return data;
};

const isCurrentUser = (_id: ObjectId, user: UserI) => _id.toString() === user._id.toString();
const isParentProcess = process.send === undefined;
const getProcessLabel = isParentProcess ? 'parent' : 'child';
const getDuration = (endTime: bigint, startTime: bigint): string => `${(endTime - startTime) / BigInt(1_000_000_000)} seconds`;
const commons = {
    isCurrentUser,
    jsonParser,
    putSegmentsInPromise,
    sleep,
    isParentProcess,
    getProcessLabel,
    getDuration,
};

export { commons };
