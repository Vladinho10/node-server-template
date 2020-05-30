'use strict';

const multiplyItems = numArray => numArray.reduce((acc, val) => acc * val, 1n);

module.exports = {
    multiplyItems,
};
