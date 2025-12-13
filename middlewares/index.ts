import * as express from 'express';
import morgan from 'morgan';

import uploadSingle from './upload';

const router = express.Router();

// Apply middleware in order
router.use(morgan('combined'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(uploadSingle);

export default {
    combine: router, // Use router instead of compose
};