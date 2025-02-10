import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import loadSwaggerConfig from '../docs/swagger/swagger-options';

const router = express.Router();

async function setupSwagger() {
    const swaggerConfig = await loadSwaggerConfig; // ✅ Await the promise
    const swaggerSpec = swaggerJsdoc(swaggerConfig); // ✅ Now it's a proper object

    router.use('/v1/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

setupSwagger().catch(err => {
    console.error('Failed to initialize Swagger:', err);
});

export { router };
