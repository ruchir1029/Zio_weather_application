const { Sequelize } = require('sequelize');  
  
const sequelize = new Sequelize('weather_monitoring_system', 'postgres', 'Ruchir@123', {  
  host: 'localhost',  
  dialect: 'postgres',  
});  
  
module.exports = sequelize;
