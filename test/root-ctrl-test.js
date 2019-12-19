'use strict';

const fs = require('fs');
const mock = require('mock-fs');
const { assert } = require('chai');

const min = (a, b) => a < b ? a : b;
function max(a, b) {return a > b ? a : b }

// beforeEach(function() {
//     let a = Math.floor(Math.random()*10);
//     console.log('before every test in every file', a++);
// });

describe('Array', function() {
    // before(function () {
    //     let a = Math.floor(Math.random() * 10);
    //     console.log('before every test in every file', a++);
    // });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    describe('#min()', function() {
        it('should return  min', function() {
            assert.strictEqual(min(5,6), 5);
        });
    });

});

describe('#max()', function() {
    it('should return  max', function() {
        assert.equal(max(8,9), 9);
    });
});


mock({
    dirName: {
        'file1.txt': 'text content', // string
        file2: Buffer.from([1, 2, 3, 4]), // Buffer
    }
});
function ifExist(dirPath) {
    return fs.existsSync(dirPath);
}

describe('#ifExist()', function () {
    it('should have 2 file', function () {
        assert.equal(ifExist('images.jpg'), true);
    });
});

mock.restore();
