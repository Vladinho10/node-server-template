import * as crypto  from 'crypto';

const toPascalCase = (str:string): string => str[0].toUpperCase() + str.slice(1);

const toCamelCase = (str: string): string => {
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

const randomString = (size = 32): string => crypto.randomBytes(size).toString('hex');
const generateFileName = (originalName: string): string => `${new Date().toISOString()}_${originalName}`;

const strings = {
    toCamelCase,
    generateFileName,
    randomString,
};

export { strings };
