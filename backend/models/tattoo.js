const { Schema, model } = require('mongoose');

const tattooSchema = new Schema({
    tags: {
        type: [String],
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now(),
        require: true
    },
    updated_at: {
        type: Date,
        default: Date.now(),
        require: true
    }
});

module.exports = model('tattoo', tattooSchema);