'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.general = void 0;
/* eslint-disable no-empty */
var worker_threads_1 = require('worker_threads');
// eslint-disable-next-line arrow-body-style
var putSegmentsInPromise = function (segments, childWorkerPath, data) {
    if (data === void 0) {
        data = {};
    }
    return segments.map(segment => new Promise((resolve, reject) => {
        // transfer data to each workers/threads
        var worker = new worker_threads_1.Worker(childWorkerPath, {
            workerData: __assign({ segment }, data),
        });
        // when received data form worker, resolve/return it
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0) {
                reject(new Error('Worker stopped with exit code '.concat(code)));
            }
        });
    }));
};
var jsonParser = function (jsonString) {
    var data = {};
    try {
        data = JSON.parse(jsonString);
    } catch (err) { }
    return data;
};
var isCurrentUser = function (_id, user) {
    return _id.toString() === user._id.toString();
};
var general = {
    isCurrentUser,
    jsonParser,
    putSegmentsInPromise,
};
exports.general = general;
