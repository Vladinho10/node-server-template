'use strict';
const { User } = require('../dal/models');
const { objects } = require('../helpers');
const { JwtSrv } = require('./jwt-srv');

class UserSrv {
    static async readMany(query, options) {
        return User.find(query)
            .limit(+options.limit || 10)
            .skip(+options.offset)
            .sort(options.sort);
    }

    static async readOne(query) {
        return User.findOne(query);
    }

    static async createOne(body) {
        const user = await User.create(body);
        return {
            user,
            auth: {
                token: JwtSrv.sign({ id: user.id }),
            },
        };
    }

    static async createMany(body) {
        return User.insertMany(body);
    }

    static async updateOne(id, body) {
        const newData = await objects.pick(body, ['name', 'age']);

        const user = await User.findOne({ where: { id } });

        if (!user) {
            return { message: 'error' };
        }
        for (const key in newData) {
            user[key] = newData[key];
        }
        return user.save();
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
