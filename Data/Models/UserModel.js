const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:  String,
    age: Number
});

module.exports = mongoose.model('User', userSchema);