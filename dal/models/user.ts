import * as mongoose from 'mongoose';

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
    created: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

export { User };
