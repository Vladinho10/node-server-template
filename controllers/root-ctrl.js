'use strict';
class RootCtrl {
    static readAll(req, res) {
        return res.ok('get all data');
    }

    static create(req, res) {
        return res.created('create new data');
    }
}

module.exports = {
    RootCtrl,
};
