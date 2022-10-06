'use strict';
const { Posts } = require('../dal/models');
const { objects } = require('../helpers');

class PostsSrv {
    static async createOne(userId, body) {
        const data = await Posts.create({ ...body, userId });
        return {
            data,
        };
    }

    static async updateOne(id, body) {
        const newData = await objects.pick(body, ['title']);
        const post = await Posts.findOne({ where: { id } });

        if (!post) {
            return { message: 'error' };
        }
        for (const key in newData) {
            post[key] = newData[key];
        }
        return post.save();
    }
}

module.exports = {
    PostsSrv,
};
