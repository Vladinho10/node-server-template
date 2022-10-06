'use strict';
const { PostsSrv } = require('../services');

class PostsCtrl {
    static async post(req, res) {
        const { body } = req;

        const data = await PostsSrv.createOne(req.user.id, body);

        return res.created({
            ...data,
        });
    }

    static async putOne(req, res) {
        const updatedData = await PostsSrv.updateOne(req.params._id, req.body); // change data

        return updatedData
            ? res.accepted({ data: updatedData })
            : res.notFound({ errors: [{ message: 'resource not found' }] });
    }

    static async showEjs(req, res) {
        res.render('users-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: 'Users',
        });
    }
}

module.exports = {
    PostsCtrl,
};
