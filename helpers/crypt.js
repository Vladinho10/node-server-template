'use strict';
exports.__esModule = true;
exports.crypt = void 0;
var crypto = require('crypto');
var algorithm = 'aes-256-cbc';
var key = crypto.scryptSync('keyPassword', 'salt', 32);
var iv = crypto.scryptSync('ivPassword', 'salt', 16);
// logger.info({ iv, key });
// logger.info({ bufferedKey: Buffer.from(key) });
// logger.info({ keyConvertToString: key.toString() });
var encrypt = function (data) {
    var str = typeof data === 'string' ? data : JSON.stringify(data);
    var cipher = crypto.createCipheriv(algorithm, key, iv);
    var encryptedBuffer = cipher.update(str);
    var finalEncryptedBuffer = Buffer.concat([encryptedBuffer, cipher.final()]);
    return finalEncryptedBuffer.toString('hex');
};
var decrypt = function (message) {
    var finalEncryptedBuffer = Buffer.from(message, 'hex');
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decryptedBuffer = decipher.update(finalEncryptedBuffer);
    var finalDecryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]);
    return finalDecryptedBuffer.toString();
};
// const encoded = encrypt('Some serious stuff');
// const decoded = decrypt(encoded);
// logger.info(decoded);
var crypt = {
    encrypt,
    decrypt,
};
exports.crypt = crypt;
