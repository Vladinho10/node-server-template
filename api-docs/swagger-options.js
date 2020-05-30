'use strict';
const userSchema = require('./schemas/userSchema');
const usersPath = require('./paths/usersPath');

module.exports = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node server template API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000/v1',
                description: 'local',
            },
        ],
        components: {
            schemas: {
                userSchema,
            },
        },
        paths: {
            '/users': usersPath,
        },
    },
    apis: ['./controllers/**/*.js', './api-docs/**/*.js',  './api-docs/*.json'],
};
