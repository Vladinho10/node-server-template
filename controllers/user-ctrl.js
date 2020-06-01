'use strict';
const User = require('../data/models/user-model');
const { pick } = require('../helpers/objects');

class UserCtrl {
    static async readAll(req, res) {
        const users = await User.find();

        return res.ok({
            data: users,
            limit: users.length,
        });
    }

    static async readOne(req, res) {
        const user = await User.findOne({ _id: req.params._id });

        return res.ok({
            data: user,
        });
    }

    static async create(req, res) {
        const user = await User.create(req.body);

        return res.created({
            data: user,
        });
    }

    static async createMany(req, res) {
        const user = await User.insertMany(req.body);

        return res.created({
            data: user,
        });
    }

    static async updateOne(req, res) {
        // use findOneAndUpdate for return  updated data, using as 3rd param { useFindAndModify: false, new: true }
        const newData = pick(req.body, ['name', 'age', 'gender']);

        const { nModified } = (await User.updateOne(
            { _id: req.params._id }, // find criteria
            newData,
        )); // change data

        return nModified > 0
            ? res.accepted({ message: 'updated user by id' })
            : res.notFound({ message: 'resource not found' });
    }

    static async deleteOne(req, res) {
        const { deletedCount } = (await User.deleteOne({ _id: req.params._id }));

        return deletedCount ? res.noContent() : res.notFound({ message: 'resource not found' });
    }

    static async deleteAll(req, res) {
        const data = (await User.deleteMany({ }));

        return  data ? res.noContent() : res.notFound({ message: 'resource not found' });
    }
}

module.exports = {
    UserCtrl,
};
