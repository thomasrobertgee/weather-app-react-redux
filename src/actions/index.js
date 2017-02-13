import axios from 'axious'

const API_KEY = 'e9136ee417836113576555d7a9a590c4'
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?qappid=${API_KEY}`

// extract to a seperate var and export it
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},aus`
  const request = axious.get(url)

  return {
    type: FETCH_WEATHER // the action, import to reducer (passing through middleware)
    payload: request
  }
}
