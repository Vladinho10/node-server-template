'use strict';

const User = require('../data/models/user-model');

class UserCtrl {
    static async actionReadAll(req, res) {
        const users = await User.find();
        console.log('user', users);

        res.json({
            statusCode: 200,
            message: 'get all users',
            data : users
        });
    };

    static async actionReadOne(req, res) {
        const user = await User.findOne({_id: req.params._id});

        res.json({
            statusCode: 200,
            message: 'get user by id',
            data : user
        });
    };

    /**
     * @swagger
     * tags:
     *   name: Users
     *   description: User management
     */

    /**
     * @swagger
     * path:
     *  /users/:
     *    post:
     *      summary: Create a new user
     *      tags: [Users]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/User'
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/User'
     */

    static async actionCreate(req, res) {
        try {
            const user = await User.create(req.body);

            res.json({
                statusCode: 201,
                message: 'created new user',
                data : user
            });
        } catch (e) {
            // TODO create error ctrl middleware
            res.json({e});
        }
    }

    static async actionCreateMany(req, res) {
        const user = await User.insertMany(req.body);

        res.json({
            statusCode: 201,
            message: 'created user users',
            data : user
        });
    }

    static async actionUpdateOne(req, res) {

        const { nModified } = (await User.updateOne(
            {_id: req.params._id},
            req.body));

        res.json({
            statusCode: 202,
            message: 'update user by id',
            data: { nModified }
        });
    }

    static async actionDeleteOne(req, res) {
        const { deletedCount } = (await User.deleteOne({_id: req.params._id}));

        res.json({
            statusCode: 204,
            message: 'delete user by id',
            data: { deletedCount }
        });
    }
}

module.exports = UserCtrl;
