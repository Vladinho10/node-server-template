'use strict';
exports.__esModule = true;
exports.arrays = void 0;
var isEmptyArray = function (arr) {
    return !Array.isArray(arr) || !arr.length;
};
var getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
var multiplyItems = function (numArray) {
    return numArray.reduce((acc, val) => acc * val, 1);
};
var sliceIntoChunks = function (arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};
var arrays = {
    isEmptyArray,
    getRandomItem,
    multiplyItems,
    sliceIntoChunks,
};
exports.arrays = arrays;
