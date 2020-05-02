'use strict';
const SwaggerRt = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('swagger-jsdoc')(require('../api-docs/swagger-options'));

SwaggerRt.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// see how your swaggerSpec is construct /v1/docs/swagger-ui-init.js

module.exports = SwaggerRt;
