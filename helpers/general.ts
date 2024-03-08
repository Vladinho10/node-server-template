import { Worker } from  'worker_threads';

const sleep = (seconds = 1): void => {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, seconds * 1000);
};
// eslint-disable-next-line arrow-body-style
const putSegmentsInPromise = (segments, childWorkerPath, data = {}) => {
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
const jsonParser = jsonString => {
    let data = {};

    try {
        data = JSON.parse(jsonString);
    } catch (err) {
        console.log('json parser error', err);
    }

    return data;
};
const isCurrentUser = (_id, user) => _id.toString() === user._id.toString();
const isParent = process.send === undefined;
const getProcessLabel = isParent ? 'parent' : 'child';
const getDuration = (endTime: bigint, startTime: bigint): string => `${(endTime - startTime) / BigInt(1_000_000_000)} seconds`;
const general = {
    isCurrentUser,
    jsonParser,
    putSegmentsInPromise,
    sleep,
    isParent,
    getProcessLabel,
    getDuration,
};

export { general };
