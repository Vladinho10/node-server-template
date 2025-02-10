import  { Document, Schema, model } from 'mongoose';

interface UserI extends Document {
    name: string,
    age: number,
    gender: string,
    created: Date,
}

const User = model('User', new Schema({
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
}));

export { UserI, User };
