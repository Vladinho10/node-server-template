import * as fs from 'fs';

const pathsPWD = `${process.cwd()}/docs/swagger/paths`;
const schemasPWD = `${process.cwd()}/docs/swagger/schemas`;
const paths = fs
    .readdirSync(pathsPWD)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    .reduce((acc, file) => Object.assign(acc, require(`${pathsPWD}/${file}`)), {});

const schemas = fs
    .readdirSync(schemasPWD)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    .reduce((acc, file) => Object.assign(acc, require(`${schemasPWD}/${file}`)), {});

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
