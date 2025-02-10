const pick = <T>(obj: Record<string, T>, fields: string[]): Partial<T> => {
    const picked: Partial<T> = {};

    for (const key in obj) {
        if (fields.includes(key)) {
            picked[key] = obj[key];
        }
    }

    return picked;
};

const skip = <T extends Record<string, unknown>>(obj: T, fields: string[]): Partial<T> => {
    const skipped: Partial<T> = {};

    for (const key in obj) {
        if (!fields.includes(key)) {
            skipped[key] = obj[key];
        }
    }

    return skipped;
};

const isEmptyObject = (obj:unknown) => typeof obj === 'object'
    && Object.keys(obj).length === 0
    && obj.constructor === Object;

const isNotIndex = (file, ext) => (file.slice(-3) === ext) && (file !== `index${ext}`);

const deepEqual = (x:object, y: object): boolean => {
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
