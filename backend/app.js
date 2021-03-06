const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

require("dotenv").config();

//rotas
const clientRouter = require('./routes/client');
const paymentRouter = require('./routes/payment');
const professionalRouter = require('./routes/professional');
const tattooRouter = require('./routes/tattoo');

const app = express();

mongoose.connect(`mongodb+srv://tatuando:${process.env.MONGODB_PASSWORD}@tatuando.yermr.mongodb.net/tatuando?retryWrites=true&w=majority`, {
    useNewURlParser: true,
    useUnifiedTopology: true,
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/users', clientRouter);
app.use('/payment', paymentRouter);
app.use('/professional', professionalRouter);
app.use('/tattoos', tattooRouter);

module.exports = app;
