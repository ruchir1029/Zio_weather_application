const dotenv = require('dotenv');  
  
dotenv.config();  
  
module.exports = {  
  API_KEY: process.env.API_KEY,  
  DB_HOST: process.env.DB_HOST,  
  DB_USER: process.env.DB_USER,  
  DB_PASSWORD: process.env.DB_PASSWORD,  
  DB_NAME: process.env.DB_NAME,  
  INTERVAL: process.env.INTERVAL, // in minutes  
};
