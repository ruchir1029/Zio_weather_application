function calculateDailySummary(weatherData) {  
  const dailySummary = {};  
  dailySummary.date = new Date(weatherData[0].dt * 1000).toISOString().split('T')[0];  
  dailySummary.location = weatherData[0].location;  
  dailySummary.avg_temp = weatherData.reduce((acc, current) => acc + current.temp, 0) / weatherData.length;  
  dailySummary.max_temp = Math.max(...weatherData.map(data => data.temp));  
  dailySummary.min_temp = Math.min(...weatherData.map(data => data.temp));  
  dailySummary.dominant_weather = weatherData.reduce((acc, current) => {  
   if (acc[current.main]) {  
    acc[current.main]++;  
   } else {  
    acc[current.main] = 1;  
   }  
   return acc;  
  }, {});  
  dailySummary.dominant_weather = Object.keys(dailySummary.dominant_weather).sort((a, b) => dailySummary.dominant_weather[b] - dailySummary.dominant_weather[a])[0];  
  return dailySummary;  
}  
  
function checkAlerts(weatherData, alerts) {  
  const triggeredAlerts = [];  
  alerts.forEach(alert => {  
   if (weatherData.some(data => data.temp > alert.threshold && data.main === alert.weather_condition)) {  
    triggeredAlerts.push(alert);  
   }  
  });  
  return triggeredAlerts;  
}  
  
module.exports = { calculateDailySummary, checkAlerts };
