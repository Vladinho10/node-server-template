import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { objects } from '../helpers';
import { UserSrv } from '../services';

export class UserCtrl {
    static async getMany(req: Request, res: Response) {
        const { query } = req;
        const findCriteria = objects.pick(query, ['name', 'age', 'gender']);
        const options = objects.pick(query, ['limit', 'offset', 'sort']);

        const users = await UserSrv.readMany(findCriteria, options);

        res.send({
            data: users,
            limit: users.length,
        });

        return;
    }
    static async getOne(req: Request, res: Response) {
        const user = await UserSrv.readOne({ _id: req.params._id });

        res.send({
            data: user,
        });

        return;
    }
    static async post(req: Request, res: Response) {
        const { body } = req;
        const create = Array.isArray(body) ? UserSrv.createMany : UserSrv.createOne;

        const data = await create(body);

        res.status(httpStatus.CREATED).send({
            data,
        });

        return;
    }
    static async putOne(req: Request, res: Response) {
        const user = await UserSrv.updateOne(req.params._id, req.body); // change data

        if (user) {
            res.status(httpStatus.ACCEPTED).send({ data: user });
        } else {
            res.status(httpStatus.NOT_FOUND).send({ errors: [{ message: 'resource not found' }] });
        }
    }

    static async putMany(req: Request, res: Response) {
        const isModified = await UserSrv.updateMany(req.body);

        if (isModified) {
            res.status(httpStatus.ACCEPTED).send({ data: { message: 'updated user by id' } });
        } else {
            res.status(httpStatus.NOT_FOUND).send({ errors: [{ message: 'resource not found' }] });
        }
    }

    static async removeOne(req: Request, res: Response) {
        const isDeleted = await UserSrv.deleteOne(req.params._id);

        if (isDeleted) {
            res.status(httpStatus.ACCEPTED).send();
        } else {
            res.status(httpStatus.NOT_FOUND).send({ errors: [{ message: 'resource not found' }] });
        }
    }

    static async removeMany(req: Request, res: Response) {
        const isDeleted = await UserSrv.deleteMany(req.body.ids);

        if (isDeleted) {
            res.status(httpStatus.ACCEPTED).send();
        } else {
            res.status(httpStatus.NOT_FOUND).send({ errors: [{ message: 'resource not found' }] });
        }
    }

    static async showEjs(req: Request, res: Response) {
        res.render('users-page', {
            origin: `${req.protocol}://${req.get('host')}`,
            name: 'Users',
        });

        return;
    }
}
