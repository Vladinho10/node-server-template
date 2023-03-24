const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const { JwtSrv } = require('../services/jwt-srv');
const { User } = require('../dal/models');
const { expect } = chai;
chai.should();

chai.use(chaiHttp);

describe('User API', () => {
    describe('post /v1/users', () => {
        let userId;
        afterEach(async () => {
            console.log('userId aft :', userId);
            await User.destroy({ where: { id: userId } });
        });
        it('It should POST a new task ', async () => {
            const newUser = {
                name: 'Vahe',
                age: 29,
            };

            const response = await chai.request(server)
                .post('/v1/users')
                .send(newUser);
            userId = response.body.data.user.id;

            const createdUser = response.body.data.user;

            expect(response.statusCode).to.equal(201);
            expect(createdUser).to.have.property('name').and.to.equal(`${newUser.name}`);
            expect(createdUser).to.have.property('age').and.to.equal(newUser.age);
        });
        it('It should NOT POST a new task without the name property ', async () => {
            const newUser = {
                age: 10,
            };

            const response = await chai.request(server)
                .post('/v1/users')
                .send(newUser);
            userId = response.body.data.user.id;

            const createdUser = response.body.data.user;

            expect(response.statusCode).to.equal(201);
            expect(createdUser).to.have.property('id').that.is.a('string').and.to.equal(`${userId}`);
            expect(createdUser).to.not.have.property('name').and.to.equal(`${newUser.name}`);
            expect(createdUser).to.have.property('age').that.is.a('number').and.to.equal(newUser.age);
        });
    });

    describe('put /v1/users/_id', () => {
        let userId;
        beforeEach(async () => {
            const newUser = new User({
                name: 'Vlad',
                age: 31,
            });
            const user = await newUser.save();
            userId = user.dataValues.id;
        });
        afterEach(async () => {
            await User.destroy({ where: { id: userId } });
        });
        it('It should PUT a new task  ', async () => {
            const newUser = {
                name: 'Narek',
                age: 30,
            };
            const token = JwtSrv.sign({ id: userId });

            const response = await chai.request(server)
                .put(`/v1/users/${userId}`)
                .send(newUser)
                .set('token', `${token}`);

            const { data } = response.body;

            expect(response.statusCode).to.equal(202);
            expect(data).to.have.property('id').that.is.a('string').and.to.equal(`${userId}`);
            expect(data).to.have.property('name').that.is.a('string').and.to.equal(`${newUser.name}`);
            expect(data).to.have.property('age').that.is.a('number').and.to.equal(newUser.age);
        });
        it('It should NOT PUT an existing task with not true token', async () => {
            const id = 1;
            const newUser = {
                name: 'Gago',
                age: 12,
            };
            const token = JwtSrv.sign({ id });

            const response = await chai.request(server)
                .put(`/v1/users/${id}`)
                .send(newUser)
                .set('token', `${token}`);

            const [errMessage] = response.body.errors;

            expect(response.statusCode).to.equal(401);
            expect(errMessage).to.have.property('message').and.to.equal('unauthorized');
        });
        it('It should NOT PUT an existing task with not true id ', async () => {
            const id = 1;
            const newUser = {
                name: 'Gegham',
                age: 12,
            };
            const token = JwtSrv.sign({ id: userId });

            const responseForAccess = await chai.request(server)
                .put(`/v1/users/${id}`)
                .send(newUser)
                .set('token', `${token}`);

            const [errMessage] = responseForAccess.body.errors;

            expect(responseForAccess.statusCode).to.equal(404);
            expect(errMessage).to.have.property('message').and.to.equal('not_found');
        });
    });
});
