'use strict';

const User = require('../data/models/user-model');

class UserCtrl {
    static async actionReadAll(req, res) {
        const users = await User.find();

        res.ok({
            message: 'get all users',
            data: users,
            limit: users.length
        });
    }

    static async actionReadOne(req, res) {
        const user = await User.findOne({ _id: req.params._id });

        res.ok({
            message: 'get user by id',
            data: user
        });
    }

    static async actionCreate(req, res) {
        try {
            const user = await User.create(req.body);

            res.created({
                message: 'created new user',
                data: user
            });
        } catch (e) {
            // TODO create error ctrl middleware
            res.json({ e });
        }
    }

    static async actionCreateMany(req, res) {
        const user = await User.insertMany(req.body);

        res.created({
            message: 'created user users',
            data: user
        });
    }

    static async actionUpdateOne(req, res) {
        // use findOneAndUpdate for return  updated data, using as 3rd param { useFindAndModify: false, new: true }
        const { nModified } = (await User.updateOne(
            { _id: req.params._id }, // find criteria
            req.body)); // change data

        nModified ? res.accepted({ message: 'updated user by id' }) : res.notFound({ message: 'resource not found' });
    }

    static async actionDeleteOne(req, res) {
        const { deletedCount } = (await User.deleteOne({ _id: req.params._id }));

        deletedCount ? res.noContent() : res.notFound({ message: 'resource not found' });
    }
}

module.exports = UserCtrl;
