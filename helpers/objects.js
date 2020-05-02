'use strict';
const objects = {
    _pick(obj, fields) {
        return fields.reduce((newObj, key) => {
            if (!(obj[key] === undefined)) {
                newObj[key] = obj[key];
            }

            return newObj;
        }, {});
    }
};

module.exports = objects;
