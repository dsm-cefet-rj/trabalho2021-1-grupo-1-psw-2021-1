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

mongoose.connect("mongodb://localhost:27017/tatuando", {useNewUrlParser: true, useUnifiedTopology: true})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', clientRouter);
app.use('/payment', paymentRouter);
app.use('/professional', professionalRouter);
app.use('/tattoos', tattooRouter);

module.exports = app;
