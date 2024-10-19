const express = require('express');  
const router = express.Router();  
const Alert = require('../models/Alert');  
const sequelize = require('../database');
  
router.get('/', async (req, res) => {  
  const alerts = await Alert.findAll();  
  res.json(alerts);  
});  
  
router.post('/', async (req, res) => {  
  const alert = await Alert.create(req.body);  
  res.json(alert);  
});  
  
module.exports = router;
