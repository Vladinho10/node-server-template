import * as express from 'express';
import * as swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';

import swaggerOptions from '../docs/swagger/swagger-options';

const SwaggerRt = express.Router();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

SwaggerRt.use('/v1/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// see how your swaggerSpec is construct /v1/docs/swagger-ui-init.js

export { SwaggerRt };
