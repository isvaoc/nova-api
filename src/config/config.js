require('dotenv').config();
const config = {
  PORT: process.env.PORT,
  DB: process.env.DB,
};

module.exports = config;
