const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    value: {
        type: Number,
        require: true,
    },
    user_name: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    num_cartao: {
        type: String,
        require: true,
    },
    validade: {
        type: Date, 
        require: true
    },
    cvv: {
        type: String, 
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now(),
        require: true,
    },
});

module.exports = model('client', paymentSchema);
