import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import swaggerOptions from '../docs/swagger/swagger-options';

const router = express.Router();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use('/v1/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// see how your swaggerSpec is construct /v1/docs/swagger-ui-init.js

export { router };
