'use strict';

class RootCtrl {
    static actionReadAll(req, res) {
        res.send('get all data');
    }

    static actionCreate(req, res) {
        res.send('create new data');
    }
}

module.exports = RootCtrl;
