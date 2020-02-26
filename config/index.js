'use strict';

require('dotenv').config();
const loggerConfig = require('../loggerConfig');

const db = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true ,
    },
};

module.exports = {
    db,
    loggerConfig,
};
