import * as crypto  from 'crypto';

const toPascalCase = str => str[0].toUpperCase() + str.slice(1);

const toCamelCase = str => {
    const words = str.split(/\W/g).filter(Boolean);
    let newStr = '';

    for (const i in words) {
        if (i === '0') {
            newStr += words[i];
        } else {
            newStr += toPascalCase(words[i]);
        }
    }

    return newStr;
};

const randomString = (size = 32) => crypto.randomBytes(size).toString('hex');
const generateFileName = originalName => `${new Date().toISOString()}_${originalName}`;

const strings = {
    toCamelCase,
    generateFileName,
    randomString,
};

export { strings };
