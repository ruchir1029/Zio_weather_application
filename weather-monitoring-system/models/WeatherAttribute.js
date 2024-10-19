const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../database');

  
class Weather extends Model {}  
  
Weather.init({  
  location: DataTypes.STRING,  
  main: DataTypes.STRING,  
  temp: DataTypes.REAL,  
  feels_like: DataTypes.REAL,  
  dt: DataTypes.INTEGER,  
}, {  
  sequelize,  
  modelName: 'Weather',  
});  
  
module.exports = Weather;
