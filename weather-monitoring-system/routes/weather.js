const express = require('express');  
const router = express.Router();  
const Weather = require('../models/WeatherAttribute');  
const sequelize = require('../database');
  
router.get('/', async (req, res) => {  
  const weatherData = await Weather.findAll();  
  res.json(weatherData);  
});  
  
router.post('/', async (req, res) => {  
  const weatherData = await Weather.create(req.body);  
  res.json(weatherData);  
});  
  
module.exports = router;
