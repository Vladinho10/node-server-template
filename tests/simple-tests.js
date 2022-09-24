
const fs = require('fs');
const mockFS = require('mock-fs');
const { assert } = require('chai');

// eslint-disable-next-line id-length
const min = (a, b) => a < b ? a : b;
// eslint-disable-next-line func-style, id-length
function max(a, b) {
    return a > b ? a : b;
}

// beforeEach(function() {
//     let a = Math.floor(Math.random()*10);
//     console.log('before every test in every file', a++);
// });

describe('Array', () => {
    // before(function () {
    //     let a = Math.floor(Math.random() * 10);
    //     console.log('before every test in every file', a++);
    // });

    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    describe('#min()', () => {
        it('should return  min', () => {
            assert.strictEqual(min(5, 6), 5);
        });
    });
});

describe('#max()', () => {
    it('should return  max', () => {
        assert.equal(max(8, 9), 9);
    });
});

mockFS({
    dirName: {
        'file1.txt': 'text content', // string
        file2: Buffer.from([1, 2, 3, 4]), // Buffer
    },
});

const ifExist = dirPath => fs.existsSync(dirPath);

describe('#ifExist()', () => {
    it('should have 2 file', () => {
        assert.equal(ifExist('images.jpg'), false);
    });
});

mockFS.restore();
