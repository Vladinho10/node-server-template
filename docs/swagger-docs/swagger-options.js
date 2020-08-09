'use strict';
const userSchema = require('./schemas/userSchema.json');
const usersPath = require('./paths/usersPath.json');
const rootPath = require('./paths/rootPath.json');

const paths = [
    usersPath,
    rootPath,
];

const keyAndValue = paths => {
    const obj = {};

    for (const path of paths) {
        for (const key in path) {
            obj[key] = path[key];
        }
    }

    return obj;
};

module.exports = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node server template API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:4000/v1',
                description: 'local',
            },
        ],
        components: {
            schemas: {
                userSchema,
            },
        },
        paths: keyAndValue(paths),
    },
    apis: [],
};
