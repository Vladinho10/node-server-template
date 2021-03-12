'use strict';
module.exports = function (resourceName, bodies) {
    return {
        routers: {
            resourceName,
            body: bodies.routers,
            fileName: `routers/${resourceName}-rt.js`,
            params: {
                dir: '../controllers',
                basePath: 'v1',
                routerName: 'camelCaseNameRt',
                controllerName: 'pascalCaseNameCtrl',
                pathName: 'pluralizedName',
            },
        },
        controllers: {
            resourceName,
            body: bodies.controllers,
            fileName: `controllers/${resourceName}-ctrl.js`,
            params: {
                dir: '../services',
                controllerName: 'pascalCaseNameCtrl',
                serviceName: 'pascalCaseNameSrv',
            },
        },
        services: {
            resourceName,
            body: bodies.services,
            fileName: `services/${resourceName}-srv.js`,
            params: {
                modelName: 'pascalCaseName',
                dir: '../dal/models',
                serviceName: 'pascalCaseNameSrv',
            },
        },
        models: {
            resourceName,
            body: bodies.models,
            fileName: `dal/models/${resourceName}.js`,
            params: { // find in string by key name
                modelName: 'pascalCaseName',
                schemaName: 'camelCaseNameSchema',
            },
        },
        unitTests: {
            resourceName,
            body: bodies.unitTests,
            fileName: `tests/unit/${resourceName}-test.js`,
            params: {
                dir: '../controllers', // key and values must contain different words
                controllerName: 'pascalCaseNameCtrl',
                testName: 'pascalCaseName',
            },
        },
        swaggerPaths: {
            resourceName,
            body: bodies.swaggerPaths,
            fileName: `docs/swagger/paths/${resourceName}-path.json`,
            params: {
                basePath: 'v1',
                schemaName: 'camelCaseNameSchema',
                tagName: 'pascalCaseName',
                pathName: 'pluralizedName',
            },
        },
        swaggerSchemas: {
            fileName: `docs/swagger/schemas/${resourceName}-schema.json`,
        },
    };
};

