const { Model, DataTypes } = require('sequelize');  

const sequelize = require('../database');
  
class Alert extends Model {}  
  
Alert.init({  
  location: DataTypes.STRING,  
  threshold: DataTypes.REAL,  
  weather_condition: DataTypes.STRING,  
  triggered: DataTypes.BOOLEAN,  
}, {  
  sequelize,  
  modelName: 'Alert',  
});  
  
module.exports = Alert;
