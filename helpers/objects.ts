const pick = (obj, fields) => {
    const picked = {};

    for (const key in obj) {
        if (fields.includes(key)) {
            picked[key] = obj[key];
        }
    }

    return picked;
};

const skip = (obj, fields) => {
    const skipped = {};

    for (const key in obj) {
        if (!fields.includes(key)) {
            skipped[key] = obj[key];
        }
    }

    return skipped;
};

const isEmptyObject = obj => typeof obj === 'object'
    && Object.keys(obj).length === 0
    && obj.constructor === Object;

const isJSFileAndNotIndex = file => (file.slice(-3) === '.js') && (file !== 'index.ts');
const isTSFileAndNotIndex = file => (file.slice(-3) === '.ts') && (file !== 'index.ts');

const objects = {
    isEmptyObject,
    isJSFileAndNotIndex,
    isTSFileAndNotIndex,
    pick,
    skip,
};

export { objects };
