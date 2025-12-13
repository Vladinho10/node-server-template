import * as nodemailer from 'nodemailer';

import * as configs from '../configs';
import { User } from '../dal/models';
import { objects } from '../helpers';

export class UserSrv {
    static async readMany(query: Record<string, unknown>, options: { limit?: string; offset?: string; sort?: string}) {
        return User.find(query)
            .limit(options.limit ? +options.limit : 0)
            .skip(options.offset ? +options.offset : 0)
            .sort(options.sort);
    }

    static async readOne(query: Record<string, unknown>) {
        nodemailer.createTransport(configs.mailOptions);

        return  User.findOne(query);
    }

    static async createOne(body: Record<string, unknown>) {
        return  User.create(body);
    }

    static async createMany(body: Record<string, unknown>[]) {
        return User.insertMany(body);
    }

    static async updateOne(_id: string, body: Record<string, unknown>) {
        const newData = objects.pick(body, ['name', 'age', 'gender']);

        return User.findOneAndUpdate(
            { _id },
            newData,
            { useFindAndModify: false, new: true },
        );
    }

    static async updateMany(body: { filter: Record<string, unknown>; updatingFields: Record<string, unknown> }) {
        const newData = objects.pick(body.updatingFields, ['name', 'age', 'gender']);

        const { modifiedCount } = (await User.updateMany(
            body.filter, // find criteria
            newData, // changing data
        ));

        return (modifiedCount > 0);
    }

    static async deleteOne(_id: string) {
        const { deletedCount } = (await User.deleteOne({ _id }));

        return (deletedCount > 0);
    }

    static async deleteMany(ids: string[]) {
        const { deletedCount } = (await User.deleteMany({ _id: { $in: ids } }));

        return (deletedCount > 0);
    }
}
