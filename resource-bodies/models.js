'use strict';
module.exports = `'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaName = new Schema(stringifiedSchemaObject);

const modelName = mongoose.model('modelName', schemaName);

module.exports = { modelName };
`;

