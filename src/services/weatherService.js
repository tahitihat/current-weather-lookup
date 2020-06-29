import * as constants from "../utils/constants";
import * as stateData from "../utils/stateData";

export default class WeatherService {
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": '*',
  };

  /* 
    Use fetch to send a zipcode-based GET request to OpenWeatherData API.
  */
  static requestWeatherByZip(zipCode, isFahrenheit, callback, errorMessage) {
    const tempScale = isFahrenheit ? 'imperial' : 'metric';

    return fetch(constants.ZIP_API_URL(zipCode, tempScale), {
      mode: 'cors',
      method: "GET",
      headers: this.headers,
    })
      .then((r) => r.json())
      .then(callback)
      .catch(errorMessage);
  }

  /* 
  Use fetch to send a city/state-based GET request to OpenWeatherData API.
  */
  static requestWeatherByCity(city, state, isFahrenheit, callback, errorMessage) {
    const stateCode = stateData.STATE_NAME_TO_CODE[state];
    const tempScale = isFahrenheit ? 'imperial' : 'metric';

    return fetch(constants.CITY_API_URL(city, stateCode, tempScale), {
      mode: 'cors',
      method: "GET",
      headers: this.headers,
    })
      .then((r) => r.json())
      .then(callback)
      .catch(errorMessage);
  }
}