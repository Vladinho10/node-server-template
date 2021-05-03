'use strict';
const getRandomInt = (max, min = 0) => Math.floor((Math.random() * (max - min + 1)) + min);
const prettifyNumber =  num => `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const numbers = {
    getRandomInt,
    prettifyNumber,
};

module.exports = { numbers };
