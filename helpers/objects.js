'use strict';
// eslint-disable-next-line arrow-body-style
const pick = (obj, fields) => {
    return fields.reduce((newObj, key) => {
        if (!(obj[key] === undefined)) {
            newObj[key] = obj[key];
        }

        return newObj;
    }, {});
};

module.exports = {
    pick,
};
