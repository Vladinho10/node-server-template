'use strict';
import * as fs from 'fs';

const paths = fs
    .readdirSync(`${__dirname}/paths`)
    .reduce((acc, file) => Object.assign(acc, require(`./paths/${file}`)), {});

const schemas = fs
    .readdirSync(`${__dirname}/schemas`)
    .reduce((acc, file) => Object.assign(acc, require(`./schemas/${file}`)), {});

export default {
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
            schemas,
        },
        paths,
    },
    apis: [],
};
