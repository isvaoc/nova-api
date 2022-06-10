const mongoose = require('mongoose');
const { DB } = require('./config/config');

mongoose
  .connect(DB)
  .then((res) => console.log('DB connected'))
  .catch((error) => console.log(error));
