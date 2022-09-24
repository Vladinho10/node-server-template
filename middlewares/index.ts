import  morgan from 'morgan';
import * as express from 'express';
import { compose } from 'compose-middleware';
import errorHandler from './error-handler';
import uploadSingle  from './upload';
import { respond } from './respond';
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
