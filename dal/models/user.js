'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        default: null,
    },
    // dateField: {
    //     type: Date,
    //     default: Date.now,
    //     index: {
    //         expireAfterSeconds: 40,
    //     },
    // },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
