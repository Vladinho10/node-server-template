import * as nodemailer from 'nodemailer';

import * as configs from '../configs';
import { User } from '../dal/models';
import { objects } from '../helpers';

export class UserSrv {
    static async readMany(query, options) {
        return User.find(query)
            .limit(+options.limit || 10)
            .skip(+options.offset)
            .sort(options.sort);
    }

    static async readOne(query) {
        nodemailer.createTransport(configs.mailOptions);
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

        const { modifiedCount } = (await User.updateMany(
            body.filter, // find criteria
            newData, // changing data
        ));

        return (modifiedCount > 0);
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
