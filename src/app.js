const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const {PORT} = require('./config/config')

app.set('port', PORT || 6501);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/nova-api', require('./routes/activity'));
app.use(express.urlencoded({ extended: false }));

module.exports = app;