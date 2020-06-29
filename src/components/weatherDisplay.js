import React from 'react';

const icons = require.context("../icons", true);

const WeatherDisplay = (props) => {
  const { weatherResponse, isFahrenheit } = props;
  const tempUnits = isFahrenheit ? '°F' : '°C';

  if (weatherResponse.cod && weatherResponse.cod !== 200) {
    return (
      <div className="fill shadow p-4 mb-4 bg-white">
        There was an error processing your request. Please ensure that you have entered a valid city/state combination or zip code.
      </div>
    );
  } else if (weatherResponse && weatherResponse.weather) {
    const iconString = weatherResponse.weather[0].icon;
    const iconImg = icons(`./${iconString}.png`)
    return (
      <div className="fill shadow p-4 mb-4 bg-white">
        <p>{`The weather in ${weatherResponse.name} is: `}<b>{weatherResponse.weather[0].description}.</b></p>
        <img src={iconImg} alt="Icon representing the current weather"/>
        <p>{`Temperature: ${weatherResponse.main.temp}${tempUnits} (Feels like ${weatherResponse.main.feels_like}${tempUnits}).`}</p>
        <p>{`Air pressure is ${weatherResponse.main.pressure} Pa and humidity is ${weatherResponse.main.humidity}%.`}</p>
        <p>{`Current wind speed is ${weatherResponse.wind.speed} mph.`}</p>
      </div>
    );
  } else {
    return (<div />);
  }
}

export default WeatherDisplay;
