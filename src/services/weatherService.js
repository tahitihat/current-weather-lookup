import * as constants from "../utils/constants";

export default class WeatherService {
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": '*',
  };

  static requestWeather(zipCode, tempScale, callback, errorMessage) {
    return fetch(constants.ZIP_API_URL(zipCode, tempScale), {
      mode: 'cors',
      method: "GET",
      headers: this.headers,
    })
      .then((r) => r.json())
      .then(callback)
      .catch(errorMessage);
  }
}
