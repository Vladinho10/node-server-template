const User = require('../Data/Models/UserModel');

class UserController {
    static async actionReadAll(req, res) {
        const users = await User.find();
        console.log('user', users);

        res.json({
            statusCode: 201,
            message: 'get all users',
            data : users
        });
    };

    static async actionReadOne(req, res) {
        const user = await User.findOne({_id: req.params._id});

        res.json({
            statusCode: 200,
            message: 'get user by name',
            data : user
        });
    };

    static async actionCreate(req, res) {
        const user = await User.create(req.body);

        res.json({
            statusCode: 201,
            message: 'created new user',
            data : user
        });
    }

    static async actionUpdateOne(req, res) {
        //findOneAndUpdate() for return updated data
        // const user = await User.findOneAndUpdate(
        // {name: req.params.name},
        //     req.body);

        const { nModified } = (await User.updateOne(
            {_id: req.params._id},
            req.body));

        res.json({
            statusCode: 201,
            message: 'update user by name',
            data: { nModified }
        });
    }

    static async actionDeleteOne(req, res) {
        const { deletedCount } = (await User.deleteOne({_id: req.params._id}));

        res.json({
            statusCode: 201,
            message: 'delete user by name',
            data: { deletedCount }
        });
    }
}

module.exports = UserController;
