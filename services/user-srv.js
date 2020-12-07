'use strict';
const { User } = require('../dal/models');
const { objects } = require('../helpers');

class UserSrv {
    static async readMany(query, options) {
        return User.find(query)
            .limit(+options.limit || 10)
            .skip(+options.offset)
            .sort(options.sort);
    }

    static async readOne(query) {
        return  User.findOne(query);
    }

    static async createOne(body) {
        return  User.create(body);
    }

    static async createMany(body) {
        return User.insertMany(body);
    }

    static async updateOne(_id, body) {
        const newData = objects.pick(body, ['name', 'age', 'gender']);

        return User.findOneAndUpdate(
            { _id },
            newData,
            { useFindAndModify: false, new: true },
        );
    }

    static async updateMany(body) {
        const newData = objects.pick(body.updatingFields, ['name', 'age', 'gender']);

        const { nModified } = (await User.updateMany(
            body.filter, // find criteria
            newData, // changing data
        ));

        return (nModified > 0);
    }

    static async deleteOne(_id) {
        const { deletedCount } = (await User.deleteOne({ _id }));

        return (deletedCount > 0);
    }

    static async deleteMany(ids) {
        const { deletedCount } = (await User.deleteMany({ _id: { $in: ids } }));

        return (deletedCount > 0);
    }
}

module.exports = {
    UserSrv,
};
