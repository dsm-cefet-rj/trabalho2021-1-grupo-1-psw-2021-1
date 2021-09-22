const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//rotas
const clientRouter = require('./routes/client');
const paymentRouter = require('./routes/payment');
const professionalRouter = require('./routes/professional');
const tattooRouter = require('./routes/tattoo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', clientRouter);
app.use('/payment', paymentRouter);
app.use('/professional', professionalRouter);
app.use('/tattoo', tattooRouter);

module.exports = app;
