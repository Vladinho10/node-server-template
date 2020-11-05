'use strict';
const isEmptyArray = arr => !Array.isArray(arr) || !arr.length;
const multiplyItems = numArray => numArray.reduce((acc, val) => acc * val, 1n);

const arrays = {
    isEmptyArray,
    multiplyItems,
};

module.exports = { arrays };
