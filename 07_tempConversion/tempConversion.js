function roundTemp(temp) {
  return (Math.round(temp * 10) / 10);
}

const convertToCelsius = function(temp) {
  return roundTemp(((temp - 32) * 5/9)); 
};

const convertToFahrenheit = function(temp) {
  return roundTemp((temp*9/5)+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
