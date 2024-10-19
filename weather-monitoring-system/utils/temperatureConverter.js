function convertTemperature(temp, unit) {  
  if (unit === 'C') {  
   return temp - 273.15;  
  } else if (unit === 'F') {  
   return (temp - 273.15) * 9/5 + 32;  
  }  
  return temp;  
}  
  
module.exports = convertTemperature;
