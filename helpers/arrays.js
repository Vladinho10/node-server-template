'use strict';
const arrays = {
    _multiplyItems(numArray) {
        return numArray.reduce((acc, val) => acc * val, 1n);
    }
};

module.exports = arrays;
