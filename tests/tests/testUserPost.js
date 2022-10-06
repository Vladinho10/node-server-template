const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../index');
const { JwtSrv } = require('../../services/jwt-srv');
const { User, Posts } = require('../../dal/models');
const { expect } = chai;
chai.should();

chai.use(chaiHttp);

describe('Posts API', () => {
    let userId;
    beforeEach(async () => {
        const newUserForPost = new User({
            name: 'Vlad',
            age: 31,
        });
        const user = await newUserForPost.save();
        userId = user.dataValues.id;
    });

    afterEach(async () => {
        await User.destroy({ where: { id: userId } });
    });

    describe('post /v1/posts', () => {
        let postId;
        afterEach(async () => {
            if (postId) {
                await Posts.destroy({ where: { id: postId } });
            }
        });
        it('It should POST a new posts ', async () => {
            const newPost = {
                title: 'gexam',
            };
            const token = JwtSrv.sign({ id: userId });

            const response = await chai.request(server)
                .post('/v1/posts')
                .send(newPost)
                .set('token', `${token}`);

            const { data } = response.body;
            postId = response.body.data.id;

            expect(response.statusCode).to.equal(201);
            expect(data).to.have.property('title').that.is.a('string').and.to.equal(`${newPost.title}`);
        });
        it('It should NOT POST a new posts without the token property ', async () => {
            const newPost = {
                title: 'gago',
            };

            const response = await chai.request(server)
                .post('/v1/posts')
                .send(newPost);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(401);
            expect(errMessage).to.have.property('message').and.to.equal('unauthorized');
        });
        it('It should NOT POST a new posts without the false token property ', async () => {
            const newPost = {
                title: 'gago',
            };

            const token = JwtSrv.sign({ id: userId + 1 });

            const response = await chai.request(server)
                .post('/v1/posts')
                .send(newPost)
                .set('token', `${token}`);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(401);
            expect(errMessage).to.have.property('message').and.to.equal('unauthorized');
        });
    });

    describe('put /v1/posts/:_id', () => {
        let postsId;
        beforeEach(async () => {
            const token = JwtSrv.sign({ id: userId });
            const beforeData = await chai.request(server)
                .post('/v1/posts')
                .send({ title: 'vlad' })
                .set('token', `${token}`);
            postsId = beforeData.body.data.id;
        });
        afterEach(async () => {
            if (postsId) {
                await Posts.destroy({ where: { id: postsId } });
            }
        });
        it('It should PUT a new posts ', async () => {
            const newPost = {
                title: 'gagas',
            };
            const token = JwtSrv.sign({ id: userId });
            const response = await chai.request(server)
                .put(`/v1/posts/${postsId}`)
                .send(newPost)
                .set('token', `${token}`);

            const { data } = response.body;

            expect(response.statusCode).to.equal(202);
            expect(data).to.have.property('userId').that.is.a('string').and.to.equal(`${userId}`);
            expect(data).to.have.property('title').that.is.a('string').and.to.equal(`${newPost.title}`);
        });
        it('It should NOT PUT a new posts without the token property ', async () => {
            const newPost = {
                title: 'gago',
            };

            const response = await chai.request(server)
                .put(`/v1/posts/${postsId}`)
                .send(newPost);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(401);
            expect(errMessage).to.have.property('message').and.to.equal('unauthorized');
        });
        it('It should NOT PUT a new posts without the id property ', async () => {
            const newPost = {
                title: 'gago',
            };

            const token = JwtSrv.sign({ id: userId });
            const response = await chai.request(server)
                .put(`/v1/posts/${1}`)
                .send(newPost)
                .set('token', `${token}`);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(404);
            expect(errMessage).to.have.property('message').and.to.equal('not_found');
        });
        it('It should NOT PUT a new posts without the false token property ', async () => {
            const newPost = {
                title: 'gago',
            };

            const token = JwtSrv.sign({ id: postsId });
            const response = await chai.request(server)
                .put(`/v1/posts/${postsId}`)
                .send(newPost)
                .set('token', `${token}`);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(401);
            expect(errMessage).to.have.property('message').and.to.equal('unauthorized');
        });
    });
});
