'use strict';
const services = require('./services');
const controllers = require('./controllers');
const routers = require('./routers');
const models = require('./models');
const unitTests = require('./unitTests');
const swaggerPaths = require('./swaggerPaths');

module.exports = {
    services,
    controllers,
    routers,
    models,
    unitTests,
    swaggerPaths,
};
