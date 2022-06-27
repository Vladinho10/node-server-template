
const sinon = require('sinon');
const { assert } = require('chai');
const httpStatus = require('http-status');

const { UserCtrl } = require('../../controllers');
const UserModel = require('../../dal/models');

const mockReq = (body = {}, query = {}, params = {}, headers = {}) => ({
    body,
    query,
    params,
    headers,
});
const mockRes = (method, statusCode) => ({
    [method](args) {
        return {
            statusCode,
            ...args,
        };
    },
});

describe('Users', () => {
    beforeEach(() => {
        /*
        * when class is used, use sandbox.createStubInstance(ClassName) - it's return stub class
        * when Function is used, use new Function() - when stub the methods
        * when you stub class methods, restore them at the end
        * */

        sinon.stub(UserModel, 'find');
        sinon.stub(UserModel, 'findOne');
        // sinon.stub(UserModel, 'create');
        sinon.stub(UserModel, 'insertMany');
        sinon.stub(UserModel, 'updateOne');
        sinon.stub(UserModel, 'deleteOne');
        sinon.stub(UserModel, 'deleteMany');
    });

    describe('#create', () => {
        it('should return status code 201 on first call, and 422 on second call', async () => {
            const _id = 'objId';
            const user = {
                name: 'Eva',
                age: 22,
                gender: 'female',
            };
            const method = 'created';
            const statusCode = httpStatus.CREATED;
            const createStub =  sinon.stub(UserModel, 'create');
            createStub.withArgs(user)
                .onCall(0)
                .resolves({ _id, ...user })
                .onCall(1)
                .resolves({
                    errors: [{ field: 'name', message: 'duplicate key' }],
                });

            const response = await UserCtrl.post(mockReq(user), mockRes(method, statusCode));

            assert.equal(response.statusCode, 201);
            assert.equal(response.data._id, _id);

            const status = httpStatus.UNPROCESSABLE_ENTITY;
            const errResponse = await UserCtrl.post(mockReq(user), mockRes(method, status));

            assert.equal(errResponse.statusCode, 422);
            assert.equal(errResponse.data.errors[0].message, 'duplicate key');
        });
    });

    afterEach(() => {
        sinon.restore();
    });
});

