import * as fs from 'fs';

const pathsPWD = `${process.cwd()}/docs/swagger/paths`;
const schemasPWD = `${process.cwd()}/docs/swagger/schemas`;

async function loadModules(directory: string) {
    const files = fs.readdirSync(directory);
    const modules = await Promise.all(files.map(async file => {
        const module = await import(`${directory}/${file}`);

        return module.default || module; // Handle default exports
    }));

    return Object.assign({}, ...modules);
}

async function loadSwaggerConfig() {
    const paths = await loadModules(pathsPWD);
    const schemas = await loadModules(schemasPWD);

    return {
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
}

// Export a Promise that resolves to the swagger config
export default loadSwaggerConfig();
