'use strict';
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync('keyPassword', 'salt', 32);
const iv = crypto.scryptSync('ivPassword', 'salt', 16);
// logger.info({ iv, key });
// logger.info({ bufferedKey: Buffer.from(key) });
// logger.info({ keyConvertToString: key.toString() });

const encrypt = data => {
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encryptedBuffer = cipher.update(str);
    const finalEncryptedBuffer = Buffer.concat([encryptedBuffer, cipher.final()]);

    return finalEncryptedBuffer.toString('hex');
};

const decrypt = message => {
    const finalEncryptedBuffer = Buffer.from(message, 'hex');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decryptedBuffer = decipher.update(finalEncryptedBuffer);
    const finalDecryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]);

    return finalDecryptedBuffer.toString();
};

// const encoded = encrypt('Some serious stuff');
// const decoded = decrypt(encoded);
// logger.info(decoded);
const crypt = {
    encrypt,
    decrypt,
};

module.exports = { crypt };

