export const API_KEY = 'eb3ea731fc11cddbe6abb31b72a79fb6';
export const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export const ZIP_API_URL = (zip) => `${CORS_PROXY}https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;