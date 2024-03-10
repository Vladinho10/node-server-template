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
const isNotIndex = (file, ext) => (file.slice(-3) === ext) && (file !== `index${ext}`);
const deepEqual = (x:object, y: object) => {
    const objectKeys = Object.keys;
    const typeofX = typeof x;
    const typeofY = typeof y;

    return x && y && typeofX === 'object' && typeofX === typeofY ? (
        objectKeys(x).length === objectKeys(y).length
        && objectKeys(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y || Object.is(x, y));
};
const objects = {
    isEmptyObject,
    isNotIndex,
    pick,
    skip,
    deepEqual,
};

export { objects };
