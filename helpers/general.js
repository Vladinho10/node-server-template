'use strict';
const { Worker } = require('worker_threads');

// eslint-disable-next-line arrow-body-style
const putSegmentsInPromise = (segments, childWorkerPath, data = {}) => {
    return segments.map(segment => new Promise((resolve, reject) => {
        // transfer data to each workers/threads
        const worker = new Worker(childWorkerPath, {
            workerData: {
                segment,
                ...data,
            }
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

module.exports = {
    putSegmentsInPromise
};
