const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
        require: true,
    },
});

module.exports = model('client', clientSchema);
