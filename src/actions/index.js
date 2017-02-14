import axios from 'axios';

const API_KEY = '3029d7747f52537b52be60401e74cfd0'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// extract to a separate var and export it
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},aus`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER, // the action, import to reducer (passing through middleware)
    payload: request
  };
}
