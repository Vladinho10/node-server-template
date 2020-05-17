'use strict';
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync('keyPassword', 'salt', 32);
const iv = crypto.scryptSync('ivPassword', 'salt', 16);
// console.log({ iv, key });
// console.log({ bufferedKey: Buffer.from(key) });
// console.log({ keyConvertToString: key.toString() });

const encrypt = data => {
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encryptedBuffer = cipher.update(str);
    const finalEncryptedBuffer = Buffer.concat([encryptedBuffer, cipher.final()]);

    return {
        iv: iv.toString('hex'),
        encryptedString: finalEncryptedBuffer.toString('hex')
    };
};

const  decrypt = message => {
    const finalEncryptedBuffer = Buffer.from(message.encryptedString, 'hex');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decryptedBuffer = decipher.update(finalEncryptedBuffer);
    const finalDecryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]);

    return finalDecryptedBuffer.toString();
};

const e = encrypt('Some serious stuff');
const d = decrypt(e);
console.log(d);

module.exports = {
    encrypt,
    decrypt
};

