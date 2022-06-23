'use strict';
// module.exports = require('../barrelExport')(__dirname);
import { errorMessages } from './error-messages';
import { general } from './general';

console.log('general', general);
console.log('error', errorMessages);
export { general, errorMessages };
