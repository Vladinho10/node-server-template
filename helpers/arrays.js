'use strict';
const isEmptyArray = arr => !Array.isArray(arr) || !arr.length;
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const multiplyItems = numArray => numArray.reduce((acc, val) => acc * val, 1n);

const arrays = {
    isEmptyArray,
    getRandomItem,
    multiplyItems,
};

module.exports = { arrays };
