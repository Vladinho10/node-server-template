'use strict';

class RootCtrl {
    static actionReadAll(req, res) {
        res.ok('get all data');
    }

    static actionCreate(req, res) {
        res.created('create new data');
    }
}

module.exports = RootCtrl;
