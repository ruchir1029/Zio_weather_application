const express = require('express');  
const router = express.Router();  
const DailySummary = require('../models/DailySummary');  

const sequelize = require('../database');

  
router.get('/', async (req, res) => {  
  const dailySummaries = await DailySummary.findAll();  
  res.json(dailySummaries);  
});  
  
router.post('/', async (req, res) => {  
  const dailySummary = await DailySummary.create(req.body);  
  res.json(dailySummary);  
});  
  
module.exports = router;


