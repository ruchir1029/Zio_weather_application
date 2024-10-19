const express = require('express');  
const app = express();  
const weatherRouter = require('./routes/weather');  
const dailySummaryRouter = require('./routes/dailySummary');  
const alertsRouter = require('./routes/alerts');  
const { calculateDailySummary, checkAlerts } = require('./utils/rollups');  
const Weather = require('./models/WeatherAttribute');  
const DailySummary = require('./models/DailySummary');  
const Alert = require('./models/Alert');  
const config = require('./config');  
  
app.use(express.json());  
  
app.use('/weather', weatherRouter);  
app.use('/dailySummary', dailySummaryRouter);  
app.use('/alerts', alertsRouter);  

const port = 3000;
  
app.listen(port, () => {  
  console.log(`Server listening on port ${port}`);  
});  
  
// Call OpenWeatherMap API at configurable interval  
setInterval(async () => {  
  const weatherData = await Weather.findAll();  
  const dailySummary = calculateDailySummary(weatherData);  
  await DailySummary.create(dailySummary);  
  const alerts = await Alert.findAll();  
  const triggeredAlerts = checkAlerts(weatherData, alerts);  
  triggeredAlerts.forEach(alert => {  
   console.log(`Alert triggered for ${alert.location} with temperature ${alert.threshold} and weather condition ${alert.weather_condition}`);  
  });  
}, config.INTERVAL * 60 * 1000);
