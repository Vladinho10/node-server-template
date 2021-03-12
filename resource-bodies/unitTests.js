'use strict';
module.exports = `'use strict';
const sinon = require('sinon');
const { assert } = require('chai');

const { controllerName } = require('dir');
const { CustomError } = require('../../services');

const mockReq = (body = {}, query = {}, params = {}, headers = {}) => ({
    body,
    query,
    params,
    headers,
    get() {},
});
const mockRes = (method, statusCode) => ({
    [method](args) {
        return {
            statusCode,
            ...args,
        };
    },
});

before(() => {
    global.CustomError = CustomError;
});

describe('#testName', () => {
    describe('#getMany', () => {
        it('should return status code 200', async () => {

        });
    });
    describe('#getOne', () => {
        it('should return status code 200', async () => {

        });
    });
    describe('#post', () => {
        it('should return status code 201', async () => {

        });
    });
    describe('#put', () => {
        it('should return status code 202', async () => {

        });
    });
    describe('#delete', () => {
        it('should return status code 204', async () => {

        });
    });
});

after(() => {
    sinon.restore();
});
`;

