import * as express from 'express';
import { compose } from 'compose-middleware';
import  morgan from 'morgan';

import { respond } from './respond';
import errorHandler from './error-handler';
import uploadSingle  from './upload';

const urlencoded = express.urlencoded({ extended: false });
const json = express.json();

export default {
    errorHandler,
    combine: compose([
        morgan('combined'),
        urlencoded,
        json,
        respond,
        uploadSingle,
    ]),
};
