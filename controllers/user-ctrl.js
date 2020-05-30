'use strict';
const User = require('../data/models/user-model');
const { _pick } = require('../helpers/objects');

class UserCtrl {
    static async actionReadAll(req, res) {
        const users = await User.find();

        res.ok({
            message: 'get all users',
            data: users,
            limit: users.length,
        });
    }

    static async actionReadOne(req, res) {
        const user = await User.findOne({ _id: req.params._id });

        res.ok({
            message: 'get user by id',
            data: user,
        });
    }

    static async actionCreate(req, res) {
        const user = await User.create(req.body);

        res.created({
            message: 'created new user',
            data: user,
        });
    }

    static async actionCreateMany(req, res) {
        const user = await User.insertMany(req.body);

        res.created({
            message: 'created user users',
            data: user,
        });
    }

    static async actionUpdateOne(req, res) {
        // use findOneAndUpdate for return  updated data, using as 3rd param { useFindAndModify: false, new: true }
        const newData = _pick(req.body, ['name', 'age', 'gender']);

        const { nModified } = (await User.updateOne(
            { _id: req.params._id }, // find criteria
            newData,
        )); // change data

        nModified ? res.accepted({ message: 'updated user by id' }) : res.notFound({ message: 'resource not found' });
    }

    static async actionDeleteOne(req, res) {
        const { deletedCount } = (await User.deleteOne({ _id: req.params._id }));

        deletedCount ? res.noContent() : res.notFound({ message: 'resource not found' });
    }

    static async actionDeleteAll(req, res) {
        try {
            const data = (await User.deleteMany({ }));

            data ? res.noContent() : res.notFound({ message: 'resource not found' });
            console.log({ data });
        } catch (e) {
            console.log({ e });
        }
    }
}

module.exports = {
    UserCtrl,
};
