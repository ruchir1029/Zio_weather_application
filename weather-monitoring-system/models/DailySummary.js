const { Model, DataTypes } = require('sequelize');  

const sequelize = require('../database');
  
class DailySummary extends Model {}  
  
DailySummary.init({  
  date: DataTypes.DATE,  
  location: DataTypes.STRING,  
  avg_temp: DataTypes.REAL,  
  max_temp: DataTypes.REAL,  
  min_temp: DataTypes.REAL,  
  dominant_weather: DataTypes.STRING,  
}, {  
  sequelize,  
  modelName: 'DailySummary',  
});  
  
module.exports = DailySummary;
