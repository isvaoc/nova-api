require('dotenv').config();
const config = {
  PORT: process.env.PORT,
  DB: process.env.DB,
  TOKEN: process.env.TOKEN_KEY
};

module.exports = config;
