'use strict';
const isEmptyArray = arr => !Array.isArray(arr) || !arr.length;
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const multiplyItems = numArray => numArray.reduce((acc, val) => acc * val, 1n);
const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

    return res;
};

const arrays = {
    isEmptyArray,
    getRandomItem,
    multiplyItems,
    sliceIntoChunks,
};

module.exports = { arrays };
