'use strict';
const { UserSrv } = require('../services/user-srv');
const { pick } = require('../helpers/objects');

class UserCtrl {
    static async getMany(req, res) {
        const { query } = req;
        const findCriteria = pick(query, ['name', 'age', 'gender']);
        const options = pick(query, ['limit', 'offset', 'sort']);

        const users = await UserSrv.readMany(findCriteria, options);

        return res.ok({
            data: users,
            limit: users.length,
        });
    }

    static async getOne(req, res) {
        const user = await UserSrv.readOne(req.params._id);

        return res.ok({
            data: user,
        });
    }

    static async post(req, res) {
        const { body } = req;
        const create = Array.isArray(body) ? UserSrv.createMany : UserSrv.createOne;

        const data = await create(body);

        return res.created({
            data,
        });
    }

    static async putOne(req, res) {
        const user = await UserSrv.updateOne(req.params._id, req.body); // change data

        return user
            ? res.accepted({ data: user })
            : res.notFound({ message: 'resource not found' });
    }

    static async putMany(req, res) {
        const isModified = await UserSrv.updateMany(req.body);

        return isModified
            ? res.accepted({ message: 'updated user by id' })
            : res.notFound({ message: 'resource not found' });
    }

    static async removeOne(req, res) {
        const isDeleted  = await UserSrv.deleteOne({ _id: req.params._id });

        return isDeleted ? res.noContent() : res.notFound({ message: 'resource not found' });
    }

    static async removeMany(req, res) {
        const isDeleted = await UserSrv.deleteMany(req.body.ids);

        return  isDeleted ? res.noContent() : res.notFound({ message: 'resource not found' });
    }

    static async showEjs(req, res) {
        res.render('users-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: 'Users',
        });
    }
}

module.exports = {
    UserCtrl,
};
