import { Request } from 'express';

import { CustomResponse } from '../middlewares/respond';
import { UserSrv } from '../services';
import { objects } from '../helpers';

export class UserCtrl {
    static async getMany(req: Request, res: CustomResponse) {
        const { query } = req;
        const findCriteria = objects.pick(query, ['name', 'age', 'gender']);
        const options = objects.pick(query, ['limit', 'offset', 'sort']);

        const users = await UserSrv.readMany(findCriteria, options);

        return res.send({
            data: users,
            limit: users.length,
        });
    }

    static async getOne(req: Request, res: CustomResponse) {
        const user = await UserSrv.readOne({ _id: req.params._id });

        return res.send({
            data: user,
        });
    }

    static async post(req: Request, res: CustomResponse) {
        const { body } = req;
        const create = Array.isArray(body) ? UserSrv.createMany : UserSrv.createOne;

        const data = await create(body);

        return res.created({
            data,
        });
    }

    static async putOne(req: Request, res: CustomResponse) {
        const user = await UserSrv.updateOne(req.params._id, req.body); // change data

        return user
            ? res.accepted({ data: user })
            : res.notFound({ errors: [{ message: 'resource not found' }] });
    }

    static async putMany(req: Request, res: CustomResponse) {
        const isModified = await UserSrv.updateMany(req.body);

        return isModified
            ? res.accepted({ data: { message: 'updated user by id' } })
            : res.notFound({ errors: [{ message: 'resource not found' }] });
    }

    static async removeOne(req: Request, res: CustomResponse) {
        const isDeleted  = await UserSrv.deleteOne({ _id: req.params._id });

        return isDeleted ? res.noContent() : res.notFound({ errors: [{ message: 'resource not found' }] });
    }

    static async removeMany(req: Request, res: CustomResponse) {
        const isDeleted = await UserSrv.deleteMany(req.body.ids);

        return  isDeleted ? res.noContent() : res.notFound({ errors: [{ message: 'resource not found' }] });
    }

    static async showEjs(req: Request, res: CustomResponse) {
        res.render('users-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: 'Users',
        });
    }
}
