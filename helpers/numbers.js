'use strict';
exports.__esModule = true;
exports.numbers = void 0;
var getRandomInt = function (max, min) {
    if (min === void 0) {
        min = 0;
    }
    return Math.floor((Math.random() * (max - min + 1)) + min);
};
var prettifyNumber = function (num) {
    return ''.concat(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
var numbers = {
    getRandomInt,
    prettifyNumber,
};
exports.numbers = numbers;
