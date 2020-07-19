'use strict';
class RootCtrl {
    static async getMany(req, res) {
        return res.ok('get all data');
    }

    static async post(req, res) {
        return res.created('create new data');
    }

    static async showEjs(req, res) {
        res.render('homePage', {
            name: req.query.name || 'Eva',
        });
    }
}

module.exports = {
    RootCtrl,
};
