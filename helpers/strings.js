'use strict';
const strings = {
    _camelize(str) {
        return str
            .toLowerCase()
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
                if (+match !== 0) {
                    if (index === 0) {
                        return match.toLowerCase();
                    }

                    return match.toUpperCase();
                } else if (match === '0') {
                    return match;
                }

                return '';
            });
    }
};

module.exports = strings;
